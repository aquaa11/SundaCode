import React from "react";
import Link from "next/link";
import "./Drama.css";
import Layout from "@/components/Layout";
function Drama() {
  const handleExplore = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };
  return (
    <Layout>
      <main>
        <section>
          <div className="px-5 py-56 md:text-center md:px-10 md:py-64 text-3xl md:text-4xl font-bold text-primary">
            <h1 className="tracking-tight leading-9">
              Ngenalkeun <br />
              Kebudayaan Sunda <br />
              Tina Drama Film Pondok
            </h1>
            <div>
              <button
                type="button"
                aria-label="SCROLL TO BOTTOM"
                onClick={handleExplore}
                className="border border-primary ease-linear transition-all duration-300 bg-primary rounded-sm mt-4 px-3 py-2  font-light text-sm text-secondary hover:border-secondary hover:shadow-md hover:shadow-primary hover:rounded-none"
              >
                Mulai Menelusuri
              </button>
            </div>
          </div>
        </section>
        <section className="py-4 w-full bg-primary">
          <div className=" w-full border-y border-white py-10">
            <h1 className="absolute left-1/2 -translate-x-1/2 -translate-y-[4.2rem] mb-6 bg-primary border border-white text-center py-1 px-4 md:px-6 text-pink text-2xl font-medium md:font-semibold">
              Pamali
            </h1>
            <div className="flex flex-col max-w-screen-xl mx-auto md:flex-row gap-10 px-8 ">
              <div className="bg-white h-[460px] sm:bg-center md:w-1/4  bg-[url('/poster-pamali.jpg')] bg-cover bg-bottom"></div>
              <div className=" md:w-3/4 font-light text-white">
                <h1 className="mb-2 text-pink text-2xl font-semibold">
                  Sinopsis
                </h1>
                <p className="mb-5 text-gray-400 md:text-base text-sm">
                  Nyaritakeun ngeunaan rombongan rumaja sakola anu geus réngsé
                  ngerjakeun tugas kelompokna, ahirna maranéhna mutuskeun pikeun
                  maenkeun kaulinan tradisional, nyaéta “ucing sumput” dina
                  waktos soré samemeh magrib, dina waktos éta Pamali maen naon
                  waé, utamana. kaulinan ucing sumput, maranéhna teu sadar yén
                  kaulinan ieu muka panto kakuatan gaib nu ngancem kasalametan
                  maranéhanana. Tungtungna, lumangsung musibah anu tereh
                  nyilakakeun salah sahijina.
                </p>
                <div className="flex flex-wrap gap-y-6 gap-x-16 md:text-base text-sm">
                  <div>
                    <h1 className="mb-2 text-pink text-2xl font-semibold">
                      Production
                    </h1>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>
                        Penulis Naskah :
                        <ul className="ml-4 flex flex-wrap gap-x-1 text-gray-400">
                          <li>Qailla -</li>
                          <li>Diana -</li>
                          <li>Riana</li>
                        </ul>
                      </li>
                      <li>
                        Kameramen :
                        <ul className="ml-4 flex flex-wrap gap-x-1 text-gray-400">
                          <li>Dwi Putri -</li>
                          <li>Rita Salwa</li>
                        </ul>
                      </li>
                      <li>
                        Editor :
                        <ul className=" ml-4 flex flex-wrap gap-x-1 text-gray-400">
                          <li>Fatma -</li>
                          <li>Marsya -</li>
                          <li>Valen</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="mb-2 text-pink text-2xl font-semibold">
                      Pemeran
                    </h1>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>
                        Siswa :
                        <ul className="ml-4 flex gap-x-1 flex-wrap lg:max-w-56 text-gray-400">
                          <li>Ramdani -</li>
                          <li>Iqbal -</li>
                          <li>Alfan -</li>
                          <li>Rizki Dwi -</li>
                          <li>Yuga -</li>
                          <li>Kayla -</li>
                          <li>Syifa -</li>
                          <li>Savaira -</li>
                          <li>Silva</li>
                        </ul>
                      </li>
                      <li>
                        Satpam Sekolah :{" "}
                        <ul className="ml-4 text-gray-400">
                          <li>M. Rizki Hasan</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <button aria-label="to kamus" className="mt-12">
                  <Link
                    href="https://youtu.be/4-HTVP158jw?si=MdLzwS0aEZQnnu-w"
                    target="_blank"
                    className="px-4 py-2 bg-primary border-2 font-bold border-pink hover:bg-pink hover:text-white transition-all text-pink  text-sm"
                    aria-label="to kamus"
                  >
                    Tonton Sekarang
                  </Link>{" "}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Drama;
