import React from "react";
import "./Drama.css";
import Layout from "@/components/Layout";
function Drama() {
  return (
    <Layout>
      <main>
        <section>
          <div className="px-5 py-36 md:text-center md:py-60 text-4xl md:text-5xl font-bold text-primary">
            <h1>Dramanya</h1>
            <h1>Bahasa Sunda</h1>
            <p className="font-normal text-base mt-4 mx-auto">
              Menampilkan drama tentang keseharian dengan
              <br />
              Bahasa Sunda
            </p>
            <div>
              <button
                type="button"
                aria-label="To Search"
                className="border border-primary ease-linear transition-all duration-300 bg-primary rounded mt-4 px-3 py-2  font-light text-sm text-secondary hover:border-secondary hover:shadow-md hover:shadow-primary hover:rounded-none"
              >
                Mulai Melihat
              </button>
            </div>
          </div>
        </section>
        <div className="flex justify-center text-secondary">
          <p className="bg-primary px-5 py-1 rounded-t-md">Drama Sunda</p>
        </div>
        <div id="kontener" className="px-8 md:px-16 py-8">
          <section>
            <div id="isi1" className="flex-col md:flex-row p-0 md:p-20">
              <div id="poster"></div>
              <div id="penting1" className=" gap-2">
                <h1 className="mb-6 text-pink text-4xl font-semibold">
                  Sinopsis
                </h1>
                <div className="flex-1 mb-5 font-sm text-black justify-center items-center flex">
                  Menceritakan tentang kelas X RPL A sepulang sekolah dan hendak
                  akan bermain terlebih dahulu, dan ternyata akan memainkan
                  ucing sumput yang dilakukan setelah petang dan dikenal sebagai
                  larangan di budaya Sunda yang terkenal dengan nama Pamali{" "}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="kontener">
          <section>
            <div
              id="isi2"
              className="flex-col md:flex-row justify-center p-0 md:p-14"
            >
              <div id="vidio" className=" w-full md:ful"></div>
              <div id="penting2" className="flex flex-col gap-2">
                <h1 className="mb-6 text-pink text-4xl font-semibold">
                  Pemeran
                </h1>
                <div className="flex-1 bg-white border-primary border-2 rounded p-5 flex flex-col gap-4">
                  <div>
                    <h2>• Satpam Sekolah : </h2>
                    <p className="font-xs">-Rizki Hasan</p>
                  </div>
                  <div>
                    <h2>• Siswa : </h2>
                    <p className="font-xs">
                      -Ramdani -Iqbal -Alfan -Rizki D -Yuga <br />
                      -Kayla -Syifa -Savaira -Silva{" "}
                    </p>
                  </div>
                  <div>
                    <h2>• Penulis Naskah : </h2>
                    <p className="font-xs">-Qailla -Diana -Riana</p>
                  </div>
                  <div>
                    <h2>• Kameramen : </h2>
                    <p className="font-xs">-Dwi -Rita</p>
                  </div>
                  <div>
                    <h2>• Editor : </h2>
                    <p className="font-xs">-Fatma -Marsya -Valen</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Drama;
