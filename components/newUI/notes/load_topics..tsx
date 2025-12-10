import { GetTopics } from "../get/topics";
import NoteCard from "./note-card";


export function LoadTopics({ subject }: { subject: string }) {
    const LoadTopics = GetTopics({ subject: subject });
  return (
    
     <>
      {LoadTopics?.map((subject) => (
        <div className=" border w-full h-auto p-4" key={subject.id}>
                        <p className=" text-3xl">{subject.title}</p>
                        <p className="text-(--my-style-third) text-sm italic">
                            {subject.description}
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
      ))}
    </>
    );
}
