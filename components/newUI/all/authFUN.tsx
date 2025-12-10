'use server';

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function Signout() {
    const supabase = await createClient();
    await supabase.auth.signOut();
}

export async function Signin() {
    redirect('/auth/signin');

}