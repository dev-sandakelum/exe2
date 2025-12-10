import { createClient } from "@/lib/supabase/client";
import { LoadCards } from "../all/types";

// Convert to a regular async function instead of a React component
export default async function Post_note({ data }: { data: LoadCards[] }) {
  console.log("Posting notes:", data);
  const supabase = createClient();

  const results = [];

  for (const note of data) {
    const { data: insertedData, error } = await supabase
      .from("Notes_subject")
      .insert([
        {
          subject: note.subject,
          topic: note.topic,
          title: note.title,
          description: note.description,
          author: note.author,
          type: note.type,
          path: note.path,
        },
      ])
      .select();

    if (error) {
      console.error("Error posting note:", error);
      results.push({ success: false, error });
    } else {
      console.log("Note posted successfully:", insertedData);
      results.push({ success: true, data: insertedData });
    }
  }

  return results;
}