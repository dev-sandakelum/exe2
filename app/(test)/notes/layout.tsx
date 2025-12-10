"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Subject } from "@/components/newUI/all/types";
import { LoadSubjects } from "@/components/newUI/notes/loadSubjects";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {

  
  const [sidebarWidth, setSidebarWidth] = useState(false); // Example width for sidebar
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const supabase = createClient();

  const [subjectData, setSubjectData] = useState<Subject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user?.id)
        .single();

      const { data: notesData } = await supabase
        .from("Notes_subject")
        .select("*");

      setSubjectData(notesData || []);
    };

    fetchData();
  }, [supabase]);

  return (
    <>
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
                  className={`h-full w-[300px] min-w-[300px] pt-12 border ${
                    sidebarWidth ? "-ml-[300px]" : "ml-0"
                  }
                            transition-all duration-300 ease-in-out overflow-hidden`}
                >
                  <div className=" w-full h-14 border">Sidebar Header</div>
                  <div className="h-full w-full border">
                    <LoadSubjects
                      subjectData={subjectData}
                      selectedSubject={selectedSubject}
                      setSelectedSubject={setSelectedSubject}
                    />
                  </div>
                </div>
      {children}
      </div>
      </div>
    </div>
    </>
  );
}
