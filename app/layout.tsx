import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentorat Jeunes Entrepreneurs",
  description:
    "Plateforme de mentorat en ligne reliant des mentors expérimentés aux jeunes entrepreneurs locaux pour accélérer leur impact.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
