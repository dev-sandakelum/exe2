import { Search } from "lucide-react";

export default function Hero({ user }: { user: any }) {
  return (
    <div className="flex w-full items-center flex-col gap-4 mt-18">
      <div className="gap-4 flex flex-col items-center">
        <h1 className="text-6xl">
          Level up your <span className="text-purple-600">skills</span>{" "}
        </h1>
        <p className="text-md text-(--my-style-third)">
          Explore top courses and manage your personal knowledge base.
        </p>
        <p>{user ? `Welcome back, ${user.email}` : "Join us today!"}</p>
      </div>
      <div className="flex items-center border rounded-full w-[500px] h-12 mt-4 px-1 gap-1 overflow-hidden">
        <div className="flex items-center h-10 px-2 w-full border rounded-full">
          <Search className="m-2 text-(--my-style-third)" strokeWidth={1} />
          <input className=" w-full" />
        </div>
        <div className="flex items-center justify-center h-10 w-25 border rounded-full bg-(--status-cyan-bg) cursor-pointer">
          <p className="text-(--my-style-primary)">Search</p>
        </div>
      </div>

      <div className=" flex gap-6 mt-10">
        <div className="border w-[240px] h-[300px] rounded-[20px]"></div>
        <div className="border w-[240px] h-[300px] rounded-[20px]"></div>
        <div className="border w-[240px] h-[300px] rounded-[20px]"></div>
        <div className="border w-[240px] h-[300px] rounded-[20px]"></div>
      </div>
    </div>
  );
}
