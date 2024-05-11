import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
function ButtonScrollToTop() {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      aria-label="Scroll To Top"
      className={`text-secondary text-xs fixed right-0 bottom-0 visible transition-all bg-primary border border-secondary rounded-md px-4 py-2 ${
        isScrolling ? "" : "invisible"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FontAwesomeIcon icon={faChevronUp} className="ml-3 text-secondary" />
    </button>
  );
}

export default ButtonScrollToTop;
