import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UPNS Preschool – Nurturing Every Child's Potential",
  description:
    "UPNS Preschool provides a safe, nurturing environment for children ages 2–6. Play-based learning, experienced teachers, and small class sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
