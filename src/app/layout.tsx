import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aryan Raut - AI & Systems Engineer",
  description: "Engineering Intelligent Systems Across Complex Universes - Portfolio of Aryan Raut, AI and Systems Engineer at Rutgers University",
  keywords: ["AI Engineer", "Systems Engineer", "Machine Learning", "Full Stack", "Portfolio"],
  authors: [{ name: "Aryan Raut" }],
  openGraph: {
    title: "Aryan Raut - AI & Systems Engineer",
    description: "Engineering Intelligent Systems Across Complex Universes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#070b14] text-white`}>
        {children}
      </body>
    </html>
  );
}
