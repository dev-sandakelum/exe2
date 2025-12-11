"use client";
import { useState } from "react";
import { LoadSubjects } from "../notes/loadSubjects";
import NoteCard from "../notes/note-card";
import { Subject } from "../all/types";
import { LoadTopics } from "../notes/load_topics";

export default function Notes_page({
  subject_code,
}: {
  subject_code: string | null;
}) {

  return (
    <>
          {/* Main Content Area */}
          <div className="h-full w-full border max-w-[900px] m-auto">
            <div
              className={`
                w-full h-full border overflow-y-scroll pt-12
                [&::-webkit-scrollbar]:hidden
                [--ms-overflow-style:'none']
                smooth-scroll
              `}
            >
              {/* {code block} */}
              <div className=" border w-full h-auto p-4">
                <p className=" text-3xl">Notes</p>
                <p className="text-muted-foreground text-sm italic">
                  organized by category
                </p>
                <div className=" w-full h-auto py-2 pr-4 grid grid-cols-2 gap-2">
                  <NoteCard
                    Note_title="Note 1"
                    Note_description="This is the content of note 1."
                    File_type="note"
                  />
                  <NoteCard
                    Note_title="Note 2"
                    Note_description="This is the content of note 2."
                    File_type="pdf"
                  />
                  <NoteCard
                    Note_title="Note 3"
                    Note_description="This is the content of note 3."
                    Badge={"g"}
                  />
                </div>
              </div>
              {subject_code && (
                <>
                  <LoadTopics subject={subject_code} />
                  {subject_code}
                </>
              )}
            </div>
          </div>
          {/* End Main Content Area */}
        </>
  );
}
