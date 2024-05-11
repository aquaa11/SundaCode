import Header from "./components/header";
import Footer from "./components/footer";
import Kamus from "./pages/Kamus/Kamus.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faVideo,
  faUser,
  faBook,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
library.add(
  faClipboard,
  faSearch,
  faHome,
  faVideo,
  faUser,
  faBook,
  faGithub,
  faInstagram,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight
);
export default function Home() {
  return (
    <div>
      <Header />
      <Kamus />
      <Footer />
    </div>
  );
}
