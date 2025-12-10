import { redirect } from "next/navigation";
import { GetCards } from "../get/cards";
import { GetTopics } from "../get/topics";
import NoteCard from "./note-card";

export function LoadTopics({ subject }: { subject: string }) {
  const topics = GetTopics({ subject: subject });
  const allCards = GetCards({ subject: subject });
  return (
    <>
      {topics?.map((topic) => {
        // Filter cards for this specific topic
        const cards = Array.isArray(allCards)
          ? allCards.filter(
              (card: any) => String(card.topic) === String(topic.id)
            )
          : [];
        return (
          <div className=" border w-full h-auto p-4" key={topic.id}>
            <p className=" text-3xl">{topic.title}</p>
            <p className="text-(--my-style-third) text-sm italic">
              {topic.description}
            </p>
            <div className=" w-full h-auto py-2 pr-4 grid grid-cols-2 gap-2">
              {cards.map((card) => (
                <NoteCard
                  key={card.title}
                  Note_title={card.title}
                  Note_description={card.description}
                  File_type={card.type}
                  Badge={card.type}
                  author={card.author}
                  path={card.path}
                  subject_code={subject}
                />
              ))}
              <div
                onClick={() => redirect("/admin/notes")}
                className={`border-2 border-(--my-style-sec) border-dashed rounded-lg flex items-center justify-center p-4 cursor-pointer hover:bg-(--my-style-sec)`}
              >
                <p className=" text-(--my-style-sec) text-4xl">+</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
