"use client";

import { User } from "lucide-react";
import Image from "next/image";
import { LogoutBtn, SigninBtn } from "../all/auth_btn";
import { Badge1 } from "../all/badges";

export default function UserCard({ user }: { user: any }) {
  return (
    <>
      <div className="border bg-card w-72 h-60 rounded-md absolute right-12 top-12 z-110">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className=" w-20 h-20 rounded-full border overflow-hidden flex items-center justify-center">
            {user.id ? (
              <Image
                alt=""
                src={
                  user?.id && user.avatar_url
                    ? user.avatar_url
                    : "/test/profile.png"
                }
                width={80}
                height={80}
                className="rounded-full"
              />
            ) : (
              <User className="m-2 text-muted-foreground" strokeWidth={1} />
            )}
          </div>

          <div className="flex flex-col items-center justify-center -gap-2 mt-1">
            <p className="text-white">
              {user?.name ? user.name : user.id ? "No Name" : "Guest"}
            </p>
            <p className="text-md text-muted-foreground mb-2">
              {user?.email}
            </p>
            {user.id && (
              <span className="pb-2">
                <Badge1 type={user && user?.security_level} />
              </span>
            )}

            {user?.id ? <LogoutBtn /> : <SigninBtn />}
          </div>
        </div>
      </div>
    </>
  );
}
