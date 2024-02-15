import type { Metadata } from "next";
import styled from "styled-components";

export const metadata: Metadata = {
  title: "IN8",
  description: "Fase 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const Body = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

  return (
    <html lang="pt-BR">
      <Body>{children}</Body>
    </html>
  );
}
