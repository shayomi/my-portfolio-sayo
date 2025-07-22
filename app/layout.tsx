import type { Metadata, Viewport } from "next";

import "./globals.scss";
import { kodchasan } from "./font";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://adegoroyesayo.vercel.app/"),
  title: {
    default: "Adegoroye sayo",
    template: "%s | Adegoroye sayo",
  },
  description:
    "I design and develop websites for anyone interested in taking advantage of the digital world",
  keywords: [
    "Adegoroye",
    "Sayo",
    "Frontend developer",
    "UIUX designer",
    "Designer",
    "React js",
    "Next js",
    "Tailwind css",
    "Javascript",
    "SEO",
    "Typrescript",
  ],
  authors: [{ name: "Adegoroye Sayo" }],
  openGraph: {
    title: "Adegoroye Sayo",
    description:
      "I design and develop websites for anyone interested in taking advantage of the digital world",
    type: "website",
    // @ts-ignore
    local: "en_US",
    siteName: "Adegoroye Sayo",
  },

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black w-full mx-auto">
      <body className={kodchasan.className}>
        <div className="w-full  bg-black mx-auto overflow-hidden">
          {/* <Header /> */}

          <main className="mx-auto w-full">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
