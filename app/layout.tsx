import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "FixItNow - Your Trusted Home Service Platform",
  description: "Book qualified technicians for home services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        {children}

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
