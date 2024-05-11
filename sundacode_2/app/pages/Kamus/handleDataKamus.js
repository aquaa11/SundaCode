import React, { useEffect } from "react";
import HandleCopyCode from "./handleCopyCode";
import Prism from "../../lib/prism/prism";

function HandleDataKamus({ newDataKamus }) {
  const detail = (kosakata) => {
    window.location.href = `/kamus/${kosakata.toLowerCase()}`;
  };
  useEffect(() => {
    {
      Prism.highlightAll();
    }
  }, [newDataKamus]);
  return newDataKamus.map((data) => (
    <div
      key={data.id}
      className="bg-white px-4 py-4 text-left rounded font-medium w-full flex flex-col gap-3"
    >
      <div>
        <span className="mr-2">{data.id}</span>
        <span>
          {data.kosakata.charAt(0).toUpperCase() + data.kosakata.slice(1)}
        </span>
        <button
          aria-label="Detail"
          className="detail float-right underline"
          onClick={() => detail(data.kosakata)}
        >
          Details
        </button>
      </div>
      <div className="font-light text-sm md:text-base overflow-hidden max-h-24">
        <span className="line-clamp-2">{data.pengertian}</span>
        <ul className="pt-2 line-clamp-3 font-light text-sm overflow-hidden">
          {data.note.map((item, index) => (
            <li key={index}>
              <span className="mx-2">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-white bg-primary px-4 py-2 rounded-t-md text-sm font-light">
          Javascript
          <HandleCopyCode text={data.contohkode} />
        </div>
        <pre className="rounded-b-md font-normal font-['Lexend']">
          <code className="language-js font-['Lexend'] ">
            {data.contohkode}
          </code>
        </pre>
      </div>
    </div>
  ));
}

export default HandleDataKamus;
