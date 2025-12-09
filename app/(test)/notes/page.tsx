"use client";
import NoteCard from "@/components/newUI/notes/note-card";
import React, { useState } from "react";

export default function page() {
  const [sidebarWidth, setSidebarWidth] = useState(false); // Example width for sidebar

  return (
    <div className="w-full h-full overflow-hidden">
      <div
        className=" absolute w-10 h-10 border text-gray-900 border-gray-300 cursor-pointer right-2 bottom-24 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md hover:bg-white transition-all flex items-center justify-center text-xs font-medium z-1000"
        onClick={
          sidebarWidth == true
            ? () => setSidebarWidth(false)
            : () => setSidebarWidth(true)
        }
      >
        sb
      </div>
      {/* ==================================================================== */}
      <div className="fixed w-full h-full  pl-16 pb-0.5">
        <div className="w-full h-full border flex border-amber-300/20 ">
          {/* Content Area */}
          <div
            className={`h-full w-[300px] pt-12 border ${
              sidebarWidth ? "-ml-[300px]" : "ml-0"
            }
                      transition-all duration-300 ease-in-out overflow-hidden`}
          >
            <div className=" w-full h-14 border">Sidebar Header</div>
            <div className="h-full w-full border">
              <ul className=" flex flex-col border w-full h-auto">
                <li className=" p-4 border-b hover:bg-(--my-style-sec) cursor-pointer">
                  Category 1
                </li>
                <li className=" p-4 border-b hover:bg-(--my-style-sec) cursor-pointer">
                  Category 2
                </li>
                <li className=" p-4 border-b hover:bg-(--my-style-sec) cursor-pointer">
                  Category 3
                </li>
                <li className=" p-4 border-b hover:bg-(--my-style-sec) cursor-pointer">
                  Category 4
                </li>
                <li className=" p-4 border-b hover:bg-(--my-style-sec) cursor-pointer">
                  Category 5
                </li>
              </ul>
            </div>
          </div>
          <div className="h-full w-full border max-w-[900px] m-auto">
            <div className={`
                w-full h-full border overflow-y-scroll pt-12
                [&::-webkit-scrollbar]:hidden
                [--ms-overflow-style:'none']
                smooth-scroll
              `} >
              {/* {code block} */}
              <div className=" border w-full h-auto p-4">
                <p className=" text-3xl">Notes</p>
                <p className="text-(--my-style-third) text-sm italic">
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
              <div className=" border w-full h-auto p-4">
                <p className=" text-3xl">Notes</p>
                <p className="text-(--my-style-third) text-sm italic">
                  organized by category
                </p>
                <div className="border w-full h-auto py-2 pr-4 grid grid-cols-2 gap-2">
                  <NoteCard
                    Note_title="Note 1"
                    Note_description="This is the content of note 1."
                    File_type="note"
                  />
                  <NoteCard
                    Note_title="Note 1"
                    Note_description="This is the content of note 1."
                    File_type="note"
                  />
                  <NoteCard
                    Note_title="Note 1"
                    Note_description="This is the content of note 1."
                    File_type="note"
                  />
                  <NoteCard
                    Note_title="Note 1"
                    Note_description="This is the content of note 1."
                    File_type="note"
                  />
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
              <div className=" border w-full h-auto p-4">
                <p className=" text-3xl">Notes</p>
                <p className="text-(--my-style-third) text-sm italic">
                  organized by category
                </p>
                <div className="border w-full h-auto py-2 pr-4 grid grid-cols-2 gap-2">
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
              <div className=" border w-full h-auto p-4">
                <p className=" text-3xl">Notes</p>
                <p className="text-(--my-style-third) text-sm italic">
                  organized by category
                </p>
                <div className="border w-full h-auto py-2 pr-4 grid grid-cols-2 gap-2">
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
              <div className=" border w-full h-auto p-4">
                <p className=" text-3xl">Notes</p>
                <p className="text-(--my-style-third) text-sm italic">
                  organized by category
                </p>
                <div className="border w-full h-auto py-2 pr-4 grid grid-cols-2 gap-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
