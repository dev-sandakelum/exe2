import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { LoadCards } from "../all/types";

export function GetCards({ subject}: { subject: string }) {
  const supabase = createClient();
  const [ cardData, setCardData ] = useState<LoadCards>([]);

 useEffect(() => {
    const fetchPosts = async () => {
      const { data: cardData } = await supabase.from(subject  + "_data").select("*");
        setCardData(cardData || []);
    };
    fetchPosts();
  }, [subject]);
  return cardData;
}
