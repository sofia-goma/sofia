import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "sofia",
   description: "sofia startup to build awesome project in the local community",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${inter.className} h-full flex flex-col min-h-screen`}>
            <Header />
            <main className="flex-1 h-full">
               {children}
            </main>
            <Footer />
         </body>

      </html>
   );
}
