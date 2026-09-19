
import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "MP Sole® - High-Precision Footwear Sole Manufacturer & Tooling",
  description: "MP Sole® is an industry-leading contract manufacturer and compounder of high-performance footwear outsoles, carbon-fiber plates, and ergonomic midsoles for athletic and luxury brands worldwide.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/images/favicon.png", type: "image/png" },
    ],
    apple: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head> 
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/images/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/images/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

