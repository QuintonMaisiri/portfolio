import type { Metadata } from "next";
import "./globals.css";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Quinton T Maisiri",
  description: "Quinton T Maisiri's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
