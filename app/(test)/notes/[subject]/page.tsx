'use server';
import Notes_page from "@/components/newUI/pages/notes";
import { createClient } from "@/lib/supabase/server";

interface PageProps {
  params: {
    subject: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function page(props: PageProps) {
  const params = await props.params;
  const {subject} = params;
  
  
  return (
    <Notes_page subject_code={subject} />
  );
}
