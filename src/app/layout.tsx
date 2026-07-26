import { Footer, Header } from "@/src/design-system/layouts";
import { QueryProvider } from "@/src/providers/QueryProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeKody - تعلم البرمجة",
  description: "المنصة الأولى لتعليم البرمجة في العالم العربي",
  keywords: ["CodeKody", "تعلم البرمجة", "React", "Next.js"],
  openGraph: {
    title: "CodeKody",
    description: "المنصة الأولى لتعليم البرمجة في العالم العربي",
    url: "https://codekody.vercel.app/",
    siteName: "CodeKody",
    locale: "ar_AR",
    type: "website",
  },
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
      suppressHydrationWarning
    >
      <head>
  
      </head>
      <body className="min-h-screen flex flex-col font-cairo" suppressHydrationWarning>
        <QueryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <SpeedInsights />
        </QueryProvider>
      </body>
    </html>
  );
}
