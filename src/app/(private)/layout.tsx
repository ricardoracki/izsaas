import { Header } from "@/components/header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Header />
      <div className="h-screen w-screen flex">
        <div className="w-full pt-20 px-3 md:px-14 overflow-auto py-6">
          <main className="w-full max-w-4xl overflow-hidden pb-12 mx-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
