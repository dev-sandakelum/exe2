'use server';
import Notes_page from "@/components/newUI/pages/notes";
import { createClient } from "@/lib/supabase/server";

export default async function page() {
   const supabase = await createClient();
  const { data: subjectData } = await supabase.from("Notes_subject").select("*");
  if (!subjectData) {
    return <div>No subjects found.</div>;
  }

  return (
    <Notes_page subjectData={subjectData} />
  );
}
