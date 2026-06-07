import { Footer, Header } from "@/src/design-system/layouts";
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "CodeKody",
  description: "المنصة الأولى لتعليم البرمجة في العالم العربي",
  keywords: [
    "CodeKody",
    "تعلم البرمجة",
    "React",
    "Next.js",
    "Front-End",
    "JavaScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
    >
      <body className="min-h-screen flex flex-col font-cairo">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
