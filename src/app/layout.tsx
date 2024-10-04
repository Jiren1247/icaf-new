import type { Metadata } from "next";
import { Inter, Nunito, Montserrat, Open_Sans } from "next/font/google";
import { sharedOpenGraph } from "./shared-metadata";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
//   display: "swap",
// });

// export const nunito = Nunito({
//   subsets: ["latin"],
//   variable:"--font-nunito",
//   display: "swap",
// })

// export const openSans = Open_Sans({
//   subsets: ["latin"],
//   variable: "--font-open-sans",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Home | ICAF",
  openGraph: {
    ...sharedOpenGraph,
    title: "Home | ICAF",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/public/GlobeHead.jpg" />
      </head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}