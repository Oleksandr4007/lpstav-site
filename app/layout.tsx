import "./globals.css";
import "aos/dist/aos.css";
import AOSProvider from "./components/AOSProvider";
export const metadata = {
  title: "LPSTAV S.R.O. | Stavební práce Praha",
  description:
    "LPSTAV S.R.O. nabízí rekonstrukce, fasády, obklady, dlažby, zámkovou dlažbu a kompletní stavební práce v Praze a okolí.",
  keywords:
    "stavební práce Praha, rekonstrukce Praha, fasády Praha, zámková dlažba Praha, obklady Praha, LPSTAV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
  <AOSProvider />
  {children}
</body>
    </html>
  );
}