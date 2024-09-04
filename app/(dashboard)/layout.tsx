import ProfileMenu from "@/components/ProfileMenu";
import VerticalNav from "@/components/VerticalNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex ">
        <VerticalNav />
        <section className="flex min-h-screen flex-1 flex-col  ">
          <ProfileMenu />
          {children}
        </section>
      </main>
    </div>
  );
}
