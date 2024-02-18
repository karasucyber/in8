import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IN8",
  description: "Fase 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="pt-BR">
      <body style={{
  margin: "0px",
  padding: "0px",
  boxSizing: "border-box",
}}


 >{children}</body>
    </html >
  );
}
