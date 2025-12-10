import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { LoadTopics } from "../all/types";

export function GetTopics({ subject }: { subject: string }) {
  const supabase = createClient();
  const [ topicData, setTopicData ] = useState<LoadTopics>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data: topicData } = await supabase.from(subject).select("*");
        setTopicData(topicData || []);
    };
    fetchPosts();
  }, []);

  return topicData;
}
