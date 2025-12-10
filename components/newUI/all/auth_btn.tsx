"use client";
import { Signin, Signout } from "./authFUN";

export function LogoutBtn() {
  return (
    <div
      onClick={async () => Signout()}
      className=" w-30 h-8 z-1000 border text-gray-900 border-gray-300 cursor-pointer bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md hover:bg-white transition-all flex items-center justify-center text-xs font-medium"
    >
      Sign out
    </div>
  );
}
export function SigninBtn() {
  return (
    <div
      onClick={async () => Signin()}
      className=" w-30 h-8 z-1000 border text-gray-900 border-gray-300 cursor-pointer bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md hover:bg-white transition-all flex items-center justify-center text-xs font-medium"
    >
      Sign in
    </div>
  );
}
