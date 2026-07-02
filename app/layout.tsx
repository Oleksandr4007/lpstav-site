import "./globals.css";

export const metadata = {
  title: "LPSTAV S.R.O.",
  description: "Kompletní stavební práce po celé České republice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}