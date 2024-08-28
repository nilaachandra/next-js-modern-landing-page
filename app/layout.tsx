import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Landing Page",
  description: "A modern Landing Page",
  icons: {
    icon: ["/assets/Logo.svg"],
  },
  openGraph: {
    title: "Modern Landing Page",
    description: "A modern Landing Page",
    url: "https://nextjsmodernlp.vercel.app",
    siteName: "Modern Landing Page",
    images: [{ url: "/modern-og.png", width: 1200, height: 630 }],
    locale: "en-IN",
    type: "website",
  },
};

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "800"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bricolage.className}>
      <body className={cn()}>
        <div className="w-full mx-auto">{children}</div>
      </body>
    </html>
  );
}
