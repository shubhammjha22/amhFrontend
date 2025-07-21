import "./globals.css";
import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose as needed
  display: "swap",
  variable: "--font-instrument", // optional if you want to use in Tailwind
});
export const metadata: Metadata = {
  title: "Outscale Partners - Less Busywork. More Bold Moves.",
  description:
    "Transform your business with intelligent automation and strategic outsourcing solutions.",
  keywords:
    "business automation, outsourcing, digital transformation, elite talent, intelligent systems",
  authors: [{ name: "Outscale Partners" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} ${instrumentSans.className} bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
