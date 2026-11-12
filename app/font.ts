import { Anton, Instrument_Serif, Inter } from "next/font/google";
import localFont from "next/font/local";

export const kodchasan = localFont({
  src: [
    {
      path: "../public/fonts/kodchasan/Kodchasan-Light.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/kodchasan/Kodchasan-Regular.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/kodchasan/Kodchasan-Medium.ttf",
      weight: "400",
      style: "medium",
    },
    {
      path: "../public/fonts/kodchasan/Kodchasan-Bold.ttf",
      weight: "600",
      style: "bold",
    },
  ],
});

export const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  adjustFontFallback: false,
  variable: "--font-serif",
  display: "swap",
});

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
