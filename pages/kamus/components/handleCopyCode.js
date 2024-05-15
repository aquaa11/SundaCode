"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

function HandleCopyCode({ text }) {
  const [isCopied, setCopy] = useState(false);

  const handleButtonCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 3000);
    });
  };

  return (
    <button
      aria-label="Copy to Clipboard"
      className="copy-to-clipboard float-right flex-1 text-right mr-2"
      onClick={handleButtonCopy}
      disabled={isCopied}
    >
      <FontAwesomeIcon icon={isCopied ? faCheck : faClipboard} />
      {isCopied && <span className="ml-2">Copied</span>}
    </button>
  );
}

export default HandleCopyCode;
