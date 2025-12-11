
import Grid from "@/components/newUI/all/grid";
import Nav from "@/components/newUI/nav";
import { createClient } from "@/lib/supabase/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<React.ReactNode> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profileData } = await supabase.from("profiles")
    .select("*")
    .eq("id", user?.id)
    .single();
    
  const userWithProfile = {
    ...user,
    ...profileData,
  };
  return (
    <div className="w-full h-full overflow-hidden bg-(--background)">
      <Nav user={userWithProfile} />
      <Grid />
      {children}
    </div>
  );
}
