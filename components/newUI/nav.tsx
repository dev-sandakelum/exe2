"use client";

import {
  BookAlert,
  ClipboardList,
  GraduationCap,
  Home,
  Info,
  PlayCircle,
  User,
  UserCircle,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Badge1 } from "./all/badges";
import UserCard from "./user/userCard";
import { ModeToggle } from "../for_theme_provider/theme_toggler";

export default function Nav({ user }: { user: any }) {
  const router = useRouter();
  const pathname = usePathname();
  const paths = pathname.split("/");

  //================= PATH  ==========================
  let path = "NexEra";
  let last_path = "";
  if (paths.length > 1) {
    for (let i = 1; i < paths.length - 1; i++) {
      path = path + " / " + paths[i];
    }
    path = path + " / ";
    last_path = paths[paths.length - 1];
  }
  if (paths[paths.length - 1] == "") {
    path = "";
    last_path = "NexEra";
  }
  //====================================================
  const [OP, setOP] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  //====================================================
  return (
    <>
      {/* ================================================================ */}
      <div
        onClick={() => setOP(OP == 0 ? 2 : OP - 1)}
        className="absolute w-10 h-10 z-1000 border text-gray-900 border-gray-300 cursor-pointer right-2 bottom-10 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md hover:bg-white transition-all flex items-center justify-center text-xs font-medium"
      >
        OP {OP}
      </div>

      {last_path == "NexEra" ? (
        <Image
          alt=""
          src={"/test/dashboard.png"}
          fill={true}
          className={`absolute opacity-15 ${OP == 1 && "opacity-100"} ${
            OP == 2 && "hidden"
          }
                    
        `}
        />
      ) : last_path == "notes" ? (
        <Image
          alt=""
          src={"/test/Files.png"}
          fill={true}
          className={`absolute opacity-15 ${OP == 1 && "opacity-100"} ${
            OP == 2 && "hidden"
          }
                    
        `}
        />
      ) : (
        ""
      )}

      {/* ==================================================================== */}
      <div className="fixed w-16 h-full border flex justify-between flex-col z-101">
        <div className="">
          <div className="w-16 h-16 border-b flex items-center justify-center">
            <div
              className="w-10 h-10 border rounded-full cursor-pointer "
              onClick={() => router.push("/")}
            >
              <Home className="m-2 text-(--my-style-third)" strokeWidth={1} />
            </div>
          </div>
          <div className="w-16 h-16 border-b flex items-center justify-center">
            <div
              className="w-10 h-10 border rounded-lg cursor-pointer "
              onClick={() => router.push("/notes")}
            >
              <BookAlert
                className="m-2 text-(--my-style-third) "
                strokeWidth={1}
              />
            </div>
          </div>
          <div className="w-16 h-16 border-b flex items-center justify-center">
            <div className="w-10 h-10 border rounded-lg">
              <ClipboardList
                className="m-2 text-(--my-style-third)"
                strokeWidth={1}
              />
            </div>
          </div>
          <div className="w-16 h-16 border-b flex items-center justify-center">
            <div className="w-10 h-10 border rounded-lg">
              <PlayCircle
                className="m-2 text-(--my-style-third)"
                strokeWidth={1}
              />
            </div>
          </div>
          <div className="w-16 h-16 border-b flex items-center justify-center">
            <div className="w-10 h-10 border rounded-lg">
              <GraduationCap
                className="m-2 text-(--my-style-third)"
                strokeWidth={1}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-16 h-16 border-b flex items-center justify-center">
            <div className="w-10 h-10 border rounded-full">
              <Info className="m-2 text-(--my-style-third)" strokeWidth={1} />
            </div>
          </div>
          <div className="w-16 h-16 border-b flex items-center justify-center">
           
              <ModeToggle />
            
          </div>
        </div>
      </div>
      {/* ==================================================================== */}

      <div className="fixed h-12 w-full border pl-16 flex justify-between z-100">
        <div className={`
          h-12 min-w-[300px] w-auto border rounded-br-full bg-(--sidebar) 
          flex items-center gap-2 pl-6 pr-6 text-(--sidebar-text)
          transition-all duration-300 ease-in-out
          `}>
          <p>
            <span>
              {path}
              <span className="text-white">{last_path} </span>
            </span>
          </p>
        </div>
        <div className="h-12 min-w-60 w-auto border rounded-bl-full bg-(--my-style-primary) pr-3 pl-3 flex items-center gap-2 justify-start flex-row-reverse">
          <div className=" h-10 w-10 border rounded-full overflow-hidden cursor-pointer flex items-center justify-center" onClick={()=>{setIsOpen(!isOpen)}}>
            {user.id ? (
              <Image
                alt=""
                src={
                  user?.id && user.avatar_url
                    ? user.avatar_url
                    : "/test/profile.png"
                }
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <User className="m-2 text-(--my-style-third)" strokeWidth={1} />
            )}
          </div>
          <Badge1 type={user?.security_level} />
          <Badge1 type={user?.security_level} />
          <div className="h-8  w-30 border rounded-[100%_0%_88px_32px/0%_100%_0%_100%]  flex items-end overflow-hidden ">
            {/* <div className="w-full h-9 mb-0.5 border rounded-[0_60px_60px_0] "></div> */}
          </div>
        </div>
      </div>

      {/* ==================================================================== */}

      {isOpen && <div className="absolute w-full h-full z-109" onClick={()=>{setIsOpen(!isOpen)}}></div>}
      {isOpen && <UserCard user={user} />}
    </>
  );
}
