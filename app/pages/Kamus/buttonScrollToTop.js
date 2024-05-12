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
    <div>
      <button
        aria-label="Scroll To Top"
        className={`text-secondary text-xs fixed right-2 bottom-1 visible transition-all duration-500 bg-primary border border-secondary rounded-lg px-3 py-2  ${
          isScrolling ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FontAwesomeIcon icon={faChevronUp} className="text-secondary" />
      </button>
    </div>
  );
}

export default ButtonScrollToTop;
