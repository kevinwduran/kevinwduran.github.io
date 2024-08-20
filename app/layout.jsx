import { Inter_Tight } from "next/font/google";
import "./globals.css";

// componentes
import Header from "../components/Header";

const inter_tight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-interTight",
});

export const metadata = {
  title: "Portfólio: Kevin Duran",
  description: "Meu portfólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter_tight.variable} grid-cols-1 grid xl:grid-cols-custom`}
      >
        <Header />
        <div className={`flex justify-center`}>{children}</div>
      </body>
    </html>
  );
}
