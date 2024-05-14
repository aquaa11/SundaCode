import Header from "./Header";
import Footer from "./Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Lexend } from "next/font/google";
config.autoAddCss = false;
const lexend = Lexend({ subsets: ["latin"] });
const Layout = ({ children }) => {
  return (
    <div
      className={
        lexend.className +
        ` overflow-x-hidden bg-[url('../public/svg/bg-purple-2.svg')]`
      }
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
