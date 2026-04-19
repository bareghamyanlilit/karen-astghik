import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Կարեն և Աստղիկ",
  description: "Կարեն և Աստղիկ",
  openGraph: {
    title: "Կարենի և Աստղիկի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://karen-astghik.vercel.app",
    siteName: "Կարեն և Աստղիկ",
    images: [
      {
        url: "/img3.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="m-auto max-w-md text-[#000000CC] bg-white"
        style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
