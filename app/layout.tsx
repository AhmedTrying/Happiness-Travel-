import type { Metadata } from "next";
import { Tajawal, Poppins } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happiness World Travel — هابينيس وورلد للسفر",
  description: "وكالة سفر بحرينية. حجوزات طيران، فنادق، وباقات سياحية مصممة بعناية لكل وجهاتك المفضلة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${poppins.variable}`}>
      <body style={{ fontFamily: "var(--font-tajawal), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
