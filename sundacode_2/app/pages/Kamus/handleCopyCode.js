import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
function HandleCopyCode({ text }) {
  const [isCopied, setCopy] = useState(false);
  const handleButtonCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };
  return (
    <button
      aria-label="Copy to Clipboard"
      className="copy-to-clipboard float-right mr-3"
      onClick={() => handleButtonCopy()}
    >
      <FontAwesomeIcon
        icon={faClipboard}
        className={`${isCopied ? "hidden" : "visible"}`}
      />
      <span
        className={`absolute -translate-x-16 ${
          isCopied ? "visible" : "hidden"
        }`}
      >
        Copied
        <FontAwesomeIcon icon={faCheck} className="fa fa-check ml-2" />
      </span>
    </button>
  );
}

export default HandleCopyCode;
