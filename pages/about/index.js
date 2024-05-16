import Layout from "@/components/Layout";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <Layout>
      <main>
        <section id="hero" className="pt-44 mx-auto w-full max-w-screen-xl">
          <div className="px-5 md:text-center text-3xl md:text-4xl font-bold text-primary">
            <h1> About SundaCode</h1>
            <p className="font-normal text-base mt-4 mx-auto">
              Web ini dibuat oleh siswa SMKN 2 CIMAHI untuk mempelajari
              sekaligus melestarikan bahasa sunda. Kami adalah sekelompok siswa
              yang terobsesi dengan dunia coding dan kecintaan akan budaya
              Sunda. Bersatu dalam semangat eksplorasi dan keingintahuan, kami
              telah menciptakan sebuah website yang memadukan keindahan bahasa
              Sunda dengan kecanggihan teknologi coding.
              <br />
              <br />
              Di dalam website kami, Anda akan menemukan penjelasan yang
              menyeluruh tentang coding, namun disajikan dengan bahasa yang
              lembut dan manis seperti lagu alam Sunda. Kami percaya bahwa
              belajar haruslah sebuah pengalaman yang menyenangkan dan
              menginspirasi.
              <br />
              <br />
              Kami berharap melalui karya kami ini, kami dapat memperkenalkan
              keajaiban coding kepada lebih banyak orang, sekaligus melestarikan
              kekayaan budaya Sunda yang begitu memukau. Mari bergabung bersama
              kami dalam petualangan mempelajari coding sambil menikmati pesona
              bahasa Sunda yang mempesona.
            </p>
          </div>
        </section>

        <section className="bg-primary py-3 md:py-4 mx-auto w-full mt-32 md:mt-48">
          <div className="w-full border-y border-white py-5">
            <div  className="max-w-screen-lg mx-auto ">
              <h1 className="text-3xl inline bg-primary font-bold tracking-tight text-pink px-6 absolute left-1/2 -translate-x-1/2 -translate-y-20 border border-white py-1">
                Our Team
              </h1>
              <div className="grid md:grid-cols-2 gap-y-10 gap-x-4 max-w-screen-lg mx-auto my-10">
                <div className="max-w-xs md:max-w-sm w-full md:max-w-md md:flex mx-auto overflow-hidden rounded">
                  <div className="w-full md:w-[47%] h-56 md:h-full mx-auto overflow-hidden"><img src="./Wafiyana.jpeg" className="w-full h-full bg-cover bg-center"/></div>
                  <div className="border-r md:w-[53%] border-b border-l rounded-es rounded-ee md:rounded-es-none md:rounded-se border-white  md:border-l-0 md:border-t  p-4">
                    <div>
                      <span
                        href="#"
                        className="text-pink font-semibold md:font-bold text-lg hover:text-primary transition duration-500 ease-in-out"
                      >
                        Wafiyana Ibrahim
                      </span>
                      <p className="text-sm text-gray-500 mt-1">
                        Leader | Web Developer | Designer
                      </p>
                      <p className="text-gray-500 text-sm mt-4">
                        "Beruk pencari berlian."
                      </p>

                      <div className="mt-4 mb-2 flex gap-2 text-xl text-primary">
                        <div>
                          <a href="https://www.instagram.com/wafiyahahay/">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                        </div>
                        <div>
                          <a href="https://github.com/aquaa11/">
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-xs w-full md:max-w-md md:flex mx-auto overflow-hidden rounded">
                  <div className="w-full md:w-[47%] h-56 md:h-full mx-auto"> <img src="./Dzika.jpeg" className="w-full h-full bg-cover bg-center"/></div>
                  <div className="border-r md:w-[53%] border-b border-l rounded-es rounded-ee md:rounded-es-none md:rounded-se border-white  md:border-l-0 md:border-t  p-4">
                    <div>
                      <span
                        href="#"
                        className="text-pink font-semibold md:font-bold text-lg hover:text-primary transition duration-500 ease-in-out"
                      >
                        Dzika Aziizil Julfikri
                      </span>
                      <p className="text-sm text-gray-500 mt-1">
                        Web Developer | Designer
                      </p>
                      <p className="text-gray-500 text-sm mt-4">
                        "Kau akan kehilangan bulan,karena sibuk menghitung bintang."
                      </p>

                      <div className="mt-4 mb-2 flex gap-2 text-xl text-primary">
                        <div>
                          <a href="https://www.instagram.com/dzikaazizil_/">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                        </div>
                        <div>
                          <a href="https://github.com/aquaa11/">
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-xs w-full md:max-w-md md:flex mx-auto overflow-hidden rounded">
                  <div className="w-full md:w-[47%] h-56 md:h-full mx-auto"> <img src="./Fadly.jpeg" classList="w-full h-full bg-cover bg-center"/></div>
                  <div className="border-r md:w-[53%] border-b border-l rounded-es rounded-ee md:rounded-es-none md:rounded-se border-white  md:border-l-0 md:border-t  p-4">
                    <div>
                      <span
                        href="#"
                        className="text-pink font-semibold md:font-bold text-lg hover:text-primary transition duration-500 ease-in-out"
                      >
                        Adi Fadly Shaadiqin
                      </span>
                      <p className="text-sm text-gray-500 mt-1">
                        Web Developer | Designer
                      </p>
                      <p className="text-gray-500 text-sm mt-4">
                        "Uang bukan segalanya, tapi segalanya butuh uang."
                      </p>

                      <div className="mt-4 mb-2 flex gap-2 text-xl text-primary">
                        <div>
                          <a href="https://www.instagram.com/wafiyahahay/">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                        </div>
                        <div>
                          <a href="https://github.com/aquaa11/">
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-xs w-full min-h-56 md:max-w-md md:flex mx-auto overflow-hidden rounded">
                  <div className="w-full md:w-[47%] h-56 md:h-full mx-auto"> <img src="./Rakha.jpeg" classList="w-full h-full bg-cover bg-center"/> </div>
                  <div className="border-r md:w-[53%] border-b border-l rounded-es rounded-ee md:rounded-es-none md:rounded-se border-white  md:border-l-0 md:border-t  p-4">
                    <div>
                      <span
                        href="#"
                        className="text-pink font-semibold md:font-bold text-lg hover:text-primary transition duration-500 ease-in-out"
                      >
                        Rakha Atthoilah
                      </span>
                      <p className="text-sm text-gray-500 mt-1">
                        Web Developer | Designer
                      </p>
                      <p className="text-gray-500 text-sm mt-4">
                        "Aku Cinta Indonesia"
                      </p>

                      <div className="mt-4 mb-2 flex gap-2 text-xl text-primary">
                        <div>
                          <a href="https://www.instagram.com/rkhaathllh_/">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                        </div>
                        <div>
                          <a href="https://github.com/aquaa11/">
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-white">
            <div className="w-1/4 bg-blue-400 px-3 py-10">
              <div className="size-20 mx-auto rounded-full bg-[url('/images/Wafiyana.jpeg')] bg-cover"></div>

              <div className="pl-7">
                <b className="text-pink text-xl font-bold">Wafiyana Ibrahim</b>{" "}
                <br />
                <br />
                Sebagai ketua dari pembuatan projek ini dan desainer SundaCode
                <br />
              </div>
            </div>
            <div className="flex">
              <div className="rectangle min-w-40 min-h-40 size:w-20 bg-[url('/images/Dzika.jpeg')] bg-cover"></div>
              <div className="pl-7">
                <b className="text-pink text-xl font-bold">
                  Dzika Aziizil Julfikri
                </b>
                <br />
                <br />
                Sebagai ide dari pembuat projek Sunda Code ini dan pembuat page
                beranda
                <br />
              </div>
            </div>
            <div className="flex">
              <div className="rectangle min-w-40 min-h-40 md:size-20 bg-[url('/images/Fadly.jpeg')] bg-cover"></div>
              <div className="pl-7">
                <b className="text-pink text-xl font-bold">
                  Adi Fadly Shaadiqin
                </b>{" "}
                <br />
                <br />
                Sebagai pembantu dan pembuat page about us dari projek SundaCode
                ini
                <br />
              </div>
            </div>
            <div className="flex">
              <div className="rectangle min-w-40 min-h-40 md:size-20 bg-[url('/images/Rakha.jpeg')] bg-cover"></div>
              <div className="pl-7">
                <b className="text-pink text-xl font-bold">Rakha Atthoilah</b>
                <br />
                <br />
                Sebagai pembuat page drama di web sundacode ini
                <br />
              </div>
            </div>
          </div> */}
        </section>
      </main>
    </Layout>
  );
}

export default About;
