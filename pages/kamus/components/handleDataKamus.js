import React, { useEffect, useState } from "react";
import HandleCopyCode from "./handleCopyCode";
import Prism from "prismjs";
import DisplayExampleCode from "./displayExampleCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";

function HandleDataKamus({ newDataKamus }) {
  const [detailStates, setDetailStates] = useState(Array(10).fill(false));

  const handleDetail = (index) => {
    const newDetailStates = [...detailStates];
    newDetailStates[index] = !newDetailStates[index];
    document.body.style.overflow = newDetailStates[index] ? "hidden" : "scroll";
    setDetailStates(newDetailStates);
  };

  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
    Prism.highlightAll();
  }, [newDataKamus]);

  return (
    <div className="grid-cols-1 w-full md:max-w-screen-xl mx-auto grid px-3 md:grid-cols-2 gap-3">
      {newDataKamus ? (
        newDataKamus.map((data, index) => (
          <div
            key={data.id}
            className={`${
              detailStates[index]
                ? "bg-primary text-secondary rounded-md p-6 overflow-y-scroll overflow-x-hidden"
                : "rounded bg-secondary p-4 font-medium "
            }  text-left  w-full flex flex-col gap-2 ${
              detailStates[index] &&
              " fixed -translate-x-1/2 border border-secondary left-1/2  top-20 w-[98%] h-[85%] max-w-screen-xl z-10 before:contents-[''] before:fixed before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-screen before:h-screen before:bg-black before:opacity-50 before:-z-10 transition-allw"
            }`}
          >
            {detailStates[index] && <div></div>}
            <div className="flex items-center flex-wrap">
              {detailStates[index] ? (
                <div>
                  <p className="text-pink text-xl font-bold">
                    ID : <span className="text-secondary">{data.id}</span>
                    <br />
                    Kosakata :{" "}
                    <span className="text-secondary">
                      {data.kosakata.toUpperCase()}
                    </span>
                  </p>
                </div>
              ) : (
                <div className="flex flex-wrap">
                  <span className="mr-2">{data.id}</span>
                  <span>
                    {data.kosakata.charAt(0).toUpperCase() +
                      data.kosakata.slice(1)}
                  </span>
                </div>
              )}

              <button
                aria-label="Detail"
                type="button"
                className="flex-1 text-right detail float-right underline"
                onClick={() => handleDetail(index)}
              >
                {detailStates[index] ? (
                  <FontAwesomeIcon
                    className="bg-primary hover:text-primary hover:bg-secondary transition-all text-secondary border-secondary border rounded-full size-4 p-3"
                    icon={faXmark}
                  />
                ) : (
                  "Detail"
                )}
              </button>
            </div>
            {detailStates[index] && <hr className="border-secondary" />}
            <div className="font-light text-sm md:text-base overflow-hidden">
              {detailStates[index] && (
                <h1 className="mt-3 mb-1 font-bold text-lg text-pink">
                  Pengertian :
                </h1>
              )}
              <span
                className={`${
                  !detailStates[index] && "line-clamp-2"
                }  mb-3 min-h-11 md:min-h-12`}
              >
                {data.pengertian}
              </span>

              {detailStates[index] && (
                <h1 className=" font-bold mt-4 text-lg text-pink">Catatan :</h1>
              )}
              <ul
                className={`${
                  !detailStates[index] && "text-sm line-clamp-1 md:line-clamp-2"
                } font-light`}
              >
                {data.note.map((item, index) => (
                  <li key={index}>
                    <span className="mx-2">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {data.kode ? (
              <div className="rounded-md">
                {detailStates[index] && (
                  <h1 className="py-3 font-bold text-lg text-pink">
                    Contoh Kode :
                  </h1>
                )}
                <div className="border rounded-md">
                  <div
                    className={`${
                      detailStates[index] && "border"
                    }border-pink text-white flex items-center bg-primary px-4 py-2 rounded-t-md text-sm font-light`}
                  >
                    <FontAwesomeIcon
                      icon={faJs}
                      className="mr-2 text-yellow-300 rounded-full overflow-hidden size-4"
                    />
                    <span>Javascript</span>
                    <HandleCopyCode text={data.contohkode} />
                  </div>
                  <DisplayExampleCode exampleCode={data.contohkode} />
                </div>
              </div>
            ) : (
              <div className="pt-5">
                {detailStates[index] && (
                  <h1 className=" font-bold text-lg text-pink">Contoh :</h1>
                )}
                <span className="line-clamp-2 pb-2 font-light">
                  {data.contohkode}
                </span>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="col-span-2 text-secondary py-10 text-center">
          <FontAwesomeIcon icon={faFaceSadTear} className="text-8xl py-7" />
          <br />( Kosakata yang kamu cari tidak ditemukan )
        </div>
      )}
    </div>
  );
}

export default HandleDataKamus;
