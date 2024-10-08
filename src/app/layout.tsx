import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import { Providers } from "./context/providers";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bernard Dwumfour",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={`${nunito.className} dark:bg-darkbg`}>
        <Providers>
          <Header />
          <Socials />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
