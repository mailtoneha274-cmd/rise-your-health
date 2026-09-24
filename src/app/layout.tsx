import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { BookingModalProvider } from "@/context/BookingModalContext";
import BookingModal from "@/components/BookingModal";
import JsonLd from "@/components/JsonLd";
import MetaPixel from "@/components/MetaPixel";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#022342",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://riseyourhealthh.com"),
  title: {
    default: "Rise Your Health | The PCOS Rebalance Protocol — 16 Weeks to Hormonal & Metabolic Wellness",
    template: "%s | Rise Your Health",
  },
  description:
    "The PCOS Rebalance Protocol by Rise Your Health is a structured 4-month clinical and lifestyle protocol. Address PCOS, irregular cycles, insulin resistance, and hormonal health with personalized nutrition, movement, and psychologist support.",
  keywords: [
    "PCOS reversal",
    "PCOD treatment",
    "PCOS Rebalance Protocol",
    "Rise Your Health",
    "hormonal health coach",
    "insulin resistance diet",
    "irregular periods treatment",
    "hormonal acne solutions",
    "cycle syncing nutrition",
    "PCOS weight loss program",
    "holistic PCOS management",
    "women hormonal balance",
  ],
  authors: [{ name: "Rise Your Health Clinical & Coaching Team" }],
  creator: "Rise Your Health",
  publisher: "Rise Your Health",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://riseyourhealthh.com",
  },
  openGraph: {
    title: "Rise Your Health | The PCOS Rebalance Protocol — 16 Weeks to Better Hormonal & Metabolic Health",
    description:
      "A structured 4-month clinical & lifestyle protocol designed to address underlying hormonal and metabolic drivers of PCOS/PCOD with personalized nutrition, movement, and care squad support.",
    url: "https://riseyourhealthh.com",
    siteName: "Rise Your Health",
    images: [
      {
        url: "/logo-color.png",
        width: 800,
        height: 600,
        alt: "Rise Your Health — The PCOS Rebalance Protocol",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rise Your Health | The PCOS Rebalance Protocol",
    description:
      "Transform hormonal and metabolic health in 16 weeks with personalized lifestyle, nutrition, and expert care squad support.",
    images: ["/logo-color.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full font-sans bg-black text-white selection:bg-[#287417] selection:text-white">
        <MetaPixel />
        <BookingModalProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <BookingModal />
        </BookingModalProvider>
      </body>
    </html>
  );
}
