import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { LoadTopics, LoadUser } from "../all/types";

export function GetUser({ id }: { id: string }) {
  const supabase = createClient();
  const [ user, setUser ] = useState<LoadUser>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data: userData } = await supabase.from("profiles").select("*").eq("id", id);
        setUser(userData || []);
    };
    fetchPosts();
  }, [id]);
  return user;
}
