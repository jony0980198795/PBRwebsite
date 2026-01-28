import { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import { Sarabun, Inter } from "next/font/google"; // นำเข้าฟ้อนต์ Sarabun และ Inter
import Header from "../components/headers/Header";
import Footer from "../components/footer/Footer";
import { SEO_CONFIG } from "@/src/config/seo";
import "./globals.css";

// ตั้งค่าฟ้อนต์ภาษาไทย (Sarabun)
const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sarabun", // สร้างตัวแปร CSS
});

// ตั้งค่าฟ้อนต์ภาษาอังกฤษ (Inter) - นิยมใช้คู่กัน
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PBR - Leading Graphene Innovation",
  description: "Advanced Graphene Oxide Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ใส่ className ของฟ้อนต์ที่ body */}
      <body className={`${sarabun.variable} ${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}