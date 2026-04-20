import { Geist, Geist_Mono,Inter_Tight} from "next/font/google";
import "./globals.css";
import Navbar from "./compnents/navbar";
import AnimateLine from "./compnents/animateLine";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'], // Choose the weights you need
  style: ['normal', 'italic'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Code Hijabi",
  description: "Code Hijabi",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" className={`${interTight.variable} antialiased`}>
      <body className={`${interTight.className} min-h-full flex flex-col`}>
        <AnimateLine/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
