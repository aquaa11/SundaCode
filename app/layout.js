import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
export const metadata = {
  title: "SundaCode",
  description: "Generated by sundacode entertainment",
};
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300..800&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={
          lexend.className + `bg-[url('../public/svg/bg-purple-2.svg')]`
        }
      >
        {children}
      </body>
    </html>
  );
}
