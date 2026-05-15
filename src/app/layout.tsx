import type { Metadata } from "next";
import { DM_Serif_Display, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const dm_serif_display_init = DM_Serif_Display({
  variable: "--font-dmSerifDisplay",
  weight: "400",
  subsets: ["latin"],
});

const roboto_init = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio-Aliyan",
  description: "Portfolio website for Aliyan Aqeel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_serif_display_init.variable} ${roboto_init.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
