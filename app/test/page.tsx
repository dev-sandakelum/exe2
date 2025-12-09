
import Hero from "@/components/newUI/hero";


export default function page() {
  return (
    <div className="w-full h-full overflow-hidden">
      
      {/* ==================================================================== */}
        <div className="fixed w-full h-full pt-12 pl-16 pb-0.5">
            <div className="w-full h-full border border-amber-300/20">
                {/* Content Area */}
                <Hero />
            </div>
        </div>
    </div>

  );
}
