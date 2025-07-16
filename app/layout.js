import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "La Tete En Fleurs",
  description: "Elegant and beautiful resin art by Stephanie",
  image: "images/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>La Tête En Fleurs</title>
        <meta name="description" content="Elegant and beautiful resin art by Stephanie" />

        {/* Open Graph */}
        <meta property="og:title" content="La Tête En Fleurs" />
        <meta property="og:description" content="Discover trays, coasters, bowls, and tables handcrafted in resin." />
        <meta property="og:image" content="https://lateteenfleurs.vercel.app/images/logo.png" />
        <meta property="og:url" content="https://lateteenfleurs.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resin Art – Elegant Resin Creations" />
        <meta name="twitter:description" content="Discover trays, coasters, bowls, and tables handcrafted in resin." />
        <meta name="twitter:image" content="https://lateteenfleurs.vercel.app/images/logo.png" />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
