import Note_block from "@/components/newUI/notes/note_block";

export default function page() {
  const sampleContent2 = `
    <h1>Quick Tips for Better Code</h1>
    <p>Writing clean, maintainable code is essential for long-term project success. Here are some best practices to follow:</p>
    <ol>
      <li>Use meaningful variable names that describe their purpose</li>
      <li>Keep functions small and focused on a single task</li>
      <li>Write comments for complex logic, but let code be self-documenting when possible</li>
      <li>Follow consistent formatting and style guidelines</li>
    </ol>
    <blockquote>
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler
    </blockquote>
  `;
  return (
    <div className="fixed w-full h-full  pl-16 pb-0.5">
      <div className="w-full h-full border flex justify-center overflow-y-scroll">
        <div className="h-fit w-full max-w-[900px] pt-12 flex flex-col gap-2">
          
          {Array.from({ length: 20 }).map((_, index) => (
            <Note_block key={index} content={"<h1>This is a note block</h1><p>This block can contain HTML content.</p>"} />
          ))}
          <Note_block content={sampleContent2} />
        </div>
      </div>
    </div>
  );
}
