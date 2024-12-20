import type { Metadata } from "next";
import { Inter, Montserrat, Open_Sans, Nunito } from "next/font/google";
import { sharedOpenGraph } from "./shared-metadata";
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

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
      
      <body className={`${inter.className} ${montserrat.variable} ${openSans.variable} ${nunito.variable}`}>
        <NavigationBar />
          {children}
        <Footer />
      </body>
      
    </html>
  );
}