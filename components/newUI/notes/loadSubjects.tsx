
import { redirect } from "next/navigation";
import { Subject } from "../all/types";
import { Dispatch, SetStateAction } from "react";

export function LoadSubjects({
  subjectData,
  selectedSubject,
  setSelectedSubject,
}: {
  subjectData: Subject[];
  selectedSubject: Subject | null;
  setSelectedSubject: Dispatch<SetStateAction<Subject | null>>;
}) {
  return (
    <ul>
      {subjectData?.map((subject) => (
        <li
          key={subject.id}
          onClick={() => {redirect(`/notes/${subject.subject_code}`)}}
          className=" p-4 border-b hover:bg-muted cursor-pointer"
        >
          {subject.name}
        </li>
      ))}
    </ul>
  );
}
