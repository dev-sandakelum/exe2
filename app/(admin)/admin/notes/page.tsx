"use client";

import { createClient } from "@/lib/supabase/client";
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { LoadCards, Subject } from "@/components/newUI/all/types";

function extension(filename: string): string {
  const lastDot = filename.lastIndexOf(".");
  return lastDot === -1 ? "" : filename.substring(lastDot);
}

export default function Page() {
  const [isUploading, setIsUploading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const supabase = createClient();

  useEffect(() => {
    // Check if user is authenticated
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();

    const loadSubjects = async () => {
      const { data, error } = await supabase.from("Notes_subject").select("*");
      if (error) {
        console.error("Error loading subjects:", error);
      } else {
        setSubjects(data as Subject[]);
      }
    };
    loadSubjects();
  }, []);

  async function handleFileUpload(formData: FormData) {
    const file = formData.get("file") as File;
    const fileName = formData.get("fileName") as string;

    const subject = formData.get("subject") as string;
    const topic = formData.get("topic") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const fileType = formData.get("fileType") as string;
    const author = user?.id as string;
    const content = ""; // Placeholder, actual content will be the file path after upload
    const type = fileType;
    const notePath = formData.get("path") as string;

    if (!file) {
      console.error("No file provided");
      alert("Please select a file");
      return;
    }

    if (!fileName) {
      console.error("No file name provided");
      alert("Please enter a file name");
      return;
    }

    if (!user) {
      console.error("User not authenticated");
      alert("Please log in first");
      return;
    }

    setIsUploading(true);

    try {
      // Create unique filepath
      const timestamp = Date.now();
      const fileExtension = extension(file.name);
      const filepath = `${subject}/${timestamp}${fileExtension}`;

      // Upload file to storage first
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("notes")
        .upload(filepath, file, {
          contentType: file.type,
          upsert: true,
        });

      if (uploadError) {
        console.error("Upload error:", uploadError);
        alert(`Upload failed: ${uploadError.message}`);
        return;
      }

      console.log("Upload successful:", uploadData);

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("notes").getPublicUrl(filepath);
      console.log("Public URL:", publicUrl);

      // After successful upload, insert record into database
      const noteData: LoadCards = {
        subject: subject,
        topic: parseInt(topic, 10),
        title: title,
        description: description,
        content: filepath,
        author: user.id,
        type: fileType,
        path: notePath,
      };

      // Insert directly into Supabase instead of using Post_note
      const { data: insertData, error: insertError } = await supabase
        .from(subject + "_data")
        .insert([noteData])
        .select();

      if (insertError) {
        console.error("Database insert error:", insertError);
        alert(`Database insert failed: ${insertError.message}`);

        // Rollback: Delete the uploaded file if database insert fails
        await supabase.storage.from("notes").remove([filepath]);
      } else {
        console.log("Database insert successful:", insertData);
        alert("File uploaded and record created successfully!");
        // Reset form
        const form = document.querySelector("form") as HTMLFormElement;
        form?.reset();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Notes Page</h1>

      {!user ? (
        <p className="text-red-500 mb-4">Please log in to upload files</p>
      ) : (
        <p className="text-green-500 mb-4">Logged in as: {user.email}</p>
      )}

      <form action={handleFileUpload} className="space-y-4">
        <div>
          <p>Enter file name (without extension)</p>
          <input
            type="text"
            name="fileName"
            id="fileName"
            placeholder="my-note"
            className="block p-2 border w-full"
            required
          />

          <p className="mt-4">Select subject</p>
          <select
            name="subject"
            id="subject"
            className="block p-2 border w-full"
            required
          >
            <option value="">-- Select a subject --</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.subject_code}>
                {subject.name}
              </option>
            ))}
          </select>

          <p className="mt-4">Topic</p>
          <select
            name="topic"
            id="topic"
            className="block p-2 border w-full"
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <p className="mt-4">File type</p>
          <select
            name="fileType"
            id="fileType"
            className="block p-2 border w-full"
            required
          >
            <option value="note">Note</option>
            <option value="json">JSON</option>
            <option value="txt">Text</option>
            <option value="pdf">PDF</option>
          </select>

          <p className="mt-4">Title</p>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Note title"
            className="block p-2 border w-full"
            required
          />

          <p className="mt-4">Description</p>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Brief description"
            className="block p-2 border w-full"
            required
          />

          <p className="mt-4">Path (folder structure)</p>
          <input
            type="text"
            name="path"
            id="path"
            placeholder="subject/topic"
            className="block p-2 border w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="file" className="block mb-2">
            Select File:
          </label>
          <input
            type="file"
            name="file"
            id="file"
            className="border p-2"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isUploading || !user}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          {isUploading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}
