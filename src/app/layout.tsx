import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import Providers from "@/app/Provider";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatLet",
  description: "Chat application for everyone",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en" >
      <body  className={"h-screen w-screen flex justify-center items-center "}>
      <Providers>
      {children}
        </Providers>
      </body>

    </html>
  );
}
