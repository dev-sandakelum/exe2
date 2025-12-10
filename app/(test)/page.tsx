
import Hero from "@/components/newUI/hero";
import { createClient } from "@/lib/supabase/server";


export default async function page() {
  const supabase = await createClient()
  const {data : {user}} = await supabase.auth.getUser();
  return (
    <div className="w-full h-full overflow-hidden">
      
      {/* ==================================================================== */}
        <div className="fixed w-full h-full pt-12 pl-16 pb-0.5">
            <div className="w-full h-full border border-amber-300/20">
                {/* Content Area */}
                <Hero user={user} />
            </div>
        </div>
    </div>

  );
}
