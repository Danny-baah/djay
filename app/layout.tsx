import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DJay Integrated Services Group — Integrated Services, One Accountable Partner",
  description:
    "DJay Integrated Services Group delivers human resource management, security & safety consulting, business consultancy, equipment rental and logistics services across Ghana.",
  metadataBase: new URL("https://www.djayservice.com"),
  openGraph: {
    title: "DJay Integrated Services Group",
    description:
      "Multiple capabilities. One dependable partner. HR, security, safety, logistics and more.",
    siteName: "DJay Integrated Services Group",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
