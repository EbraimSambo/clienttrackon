import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/sass/global.sass";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
      default:`Home - TRACK-ON`,
      template:  "%s | TRACK-ON"
  },
  description: "O melhor site de musica",
  icons:{
    icon:["/favicon.ico"],
    apple: ["/favicon_io/favicon-16x16.png"],
    shortcut: ["/favicon_io/apple-touch-icon.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
