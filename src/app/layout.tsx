import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const montserrat = Montserrat({
  weight: '200',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Country Pulse",
  description: "Your guide to exploring cultures, destinations, and experiences around Mongolia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className} >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
