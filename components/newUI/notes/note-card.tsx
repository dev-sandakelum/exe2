import { Cog, FileCode, FileText } from "lucide-react";
import React from "react";
import { Badge1 } from "../all/badges";
import Link from "next/link";
import { GetUser } from "../get/user";

export default function NoteCard({
  Note_title,
  Note_description,
  File_type,
  Badge,
  author = "sb",
  path ,
  subject_code,
}: {
  Note_title: string;
  Note_description: string;
  File_type?: string;
  Badge?: String;
  author?: string;
  path?: string;
  subject_code?: string;
}) {
  const user = GetUser({ id: author });
  return (
    <Link href={"/notes/" + (subject_code ? subject_code + "/" : "") + (path ? path : Note_title)} className="relative bg-card flex items-center h-18 w-full rounded-lg cursor-pointer border border-transparent hover:border-muted-foreground hover:shadow-lg transition-all duration-300 ease-out overflow-hidden group">
      {/* Icon Section */}
      <div className="min-w-20 h-full p-3 flex items-center justify-center">
        <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 ease-out">
          {File_type === "pdf" ? (
            <FileText
              className="w-7 h-7 text-red-600  transition-transform duration-300"
              strokeWidth={1.5}
            />
          ) : File_type === "note" ? (
            <FileCode
              className="w-7 h-7 text-blue-600 transition-transform duration-300"
              strokeWidth={1.5}
            />
          ) : (
            <Cog
              className="w-7 h-7 text-gray-600 group-hover:rotate-90 transition-transform duration-500"
              strokeWidth={1.5}
            />
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center pr-4 py-3 min-w-0 transition-transform duration-300">
        <p className="text-base font-medium truncate mb-1 transition-colors duration-300">
          {Note_title}
        </p>
        <p className="text-muted-foreground text-sm truncate">
          {Note_description}
        </p>
      </div>

      {/* Publisher Badge - Top Right */}
      <div className="absolute top-0 right-0 transition-transform duration-300">
        <div className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-[0_0_0_80px] shadow-sm">
          {user.length > 0 ? user[0].username : "unknown"}
        </div>
      </div>

      {/* Badge - Bottom Right */}
      {Badge && (
        <div className="absolute bottom-2 right-2 group-hover:scale-110 transition-transform duration-300">
          <Badge1 type="" />
        </div>
      )}
    </Link>
  );
}
