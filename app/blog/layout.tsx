import Footer from "@/components/shared/Footer";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-black mx-auto overflow-hidden">
      <main className="mx-auto w-full">{children}</main>
      <Footer />
    </div>
  );
}
