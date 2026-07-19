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
  title: {
    default: "Swastik EduTech",
    template: "%s | Swastik EduTech",
  },

  description:
    "Affordable digital services including Resume Design, Logo Design, Website Development, PowerPoint Presentation, PDF Editing, Printing, Spiral Binding and more.",

  keywords: [
    "Resume Design",
    "CV Design",
    "Logo Design",
    "Poster Design",
    "Certificate Design",
    "PowerPoint Presentation",
    "PDF Editing",
    "Typing Work",
    "Printing",
    "Spiral Binding",
    "Website Development",
    "Swastik EduTech",
  ],

  authors: [{ name: "Sachin Gautam" }],

  creator: "Swastik EduTech",

  metadataBase: new URL("https://YOUR-DOMAIN.vercel.app"),

  openGraph: {
    title: "Swastik EduTech",
    description:
      "Professional Digital Services for Students & Professionals.",
    url: "https://YOUR-DOMAIN.vercel.app",
    siteName: "Swastik EduTech",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
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
