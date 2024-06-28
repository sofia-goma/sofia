import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import "./index.css";


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
         <body className={inter.className}>
            <Layout>
               {children}

            </Layout>
         </body>
      </html>
   );
}
