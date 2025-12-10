"use server";
import { createClient } from "@/lib/supabase/server";

interface PageProps {
  params: {
    subject: string;
    note: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export type LoadCards = {
  subject : string;
  topic: string;
  title: string;
  description: string;
  content: {html: string};
  author: string;
  type: string;
  path: string;
}[];

export default async function page(props: PageProps) {
  const params = await props.params;
  const { subject, note } = params;
  const supabase = await createClient();

  const { data } = (await supabase.from(subject + "_data").select("*").eq("path", note).single()) || {
    data: [],
  };
  console.log("Data fetched for subject:", subject, "note:", note, data);
  return (
    <div className=" border w-full h-full px-14 overflow-y-scroll scroll-smooth">
      <div className=" border w-full h-auto py-4 flex flex-col gap-1">
        {/* {data?.map((item: any, index: number) => (
        <div key={index}>
          <h2>{item.title}</h2>
        </div>
      ))} */}
        {/* {data?.map((item: LoadCards[number], index: number) => {
          console.log("Rendering item:", item);
          return (
            <div key={index} className=" border p-2 w-full h-auto">
              <div className="" dangerouslySetInnerHTML={{"__html": item.content.html}}></div>
            </div>
          );
        })} */}
        <div key={data?.id} className=" border p-2 w-full h-auto">
              <div className="" dangerouslySetInnerHTML={{"__html": data?.content}}></div>
            </div>
      </div>
    </div>
  );
}
