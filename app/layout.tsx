import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swastik EduTech | Resume, Website & Graphic Design Services",
  description:
    "Swastik EduTech provides professional Resume Design, Website Development, PowerPoint, Graphic Design, Logo Design, PDF Editing, Printing and other digital services.",

  keywords: [
    "Resume Design",
    "Website Development",
    "Graphic Design",
    "PowerPoint",
    "Logo Design",
    "PDF Editing",
    "Printing",
    "Swastik EduTech",
  ],

  authors: [{ name: "Swastik EduTech" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
