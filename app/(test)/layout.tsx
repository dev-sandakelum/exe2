
import Grid from "@/components/newUI/all/grid";
import Nav from "@/components/newUI/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Nav />
    <Grid />
    {children}
    
    </>
    

  );
}
