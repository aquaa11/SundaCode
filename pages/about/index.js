import Layout from "@/components/Layout";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <Layout>
      <main className="max-w-screen-xl mx-auto">
        <section id="hero">
          <div className="px-5 md:text-center text-4xl md:text-5xl font-bold text-primary">
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
              bahasa Sunda yang memesona.
            </p>
          </div>

          <div className="container-kotak mx-auto px-5 mb-4 text-sm md:text-base">
            <div className="texl-xl sm:text-2xl font-bold min-w-fit  text-primary px-4 py-3 rounded sm:mt-36">
              <span className="mr-2">PEMBUAT SundaCode</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-lg" />
            </div>
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2 bg-white ">
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e  ">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                  <h3 className="text-lg font-semibold text-gray-900 ">
                    Rasa penasaran tinggi
                  </h3>
                  <p className="my-4">
                    "Beruk pencari berlian"
                  </p>
                </blockquote>
                
                <figcaption className="flex items-center justify-center ">
                  <div className="p-2 rounded-full border-pink border z-10">
                    <img
                     className="rounded-full size-20 brightness-125"
                      src="/images/Wafiyana.jpeg"
                      alt="profile picture"
                    />
                  </div>
                  <div className="space-y-0.5 font-medium text-left ms-3 py-4 px-8 border-l-0 border border-pink relative rounded-r-full right-8 ">
                    <div>Wafiyana Ibrahim</div>
                    <div className="text-sm text-gray-500 ">
                      Leader of Team | Developer | Designer-Lead
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg  ">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                  <h3 className="text-lg font-semibold text-gray-900 ">
                    Solid foundation for any project
                  </h3>
                  <p className="my-4">
                    "alhamdulillah"
                  </p>
                </blockquote>

                <figcaption className="flex items-center justify-center ">
                  <div className="p-2 rounded-full border-pink border z-10">
                    <img
                     className="rounded-full size-20 brightness-125"
                      src="/images/Dzika.jpeg"
                      alt="profile picture"
                    />
                  </div>
                  <div className="space-y-0.5 font-medium text-left ms-3 py-4 px-8 border-l-0 border border-pink relative rounded-r-full right-8 ">
                    <div>Dzika Azizil Julfikri</div>
                    <div className="text-sm text-gray-500 ">
                      Co-leader | Developer | Designer
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e  ">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                  <h3 className="text-lg font-semibold text-gray-900 ">
                    Mindblowing workflow
                  </h3>
                  <p className="my-4">
                    "Senyum bang."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <div className="p-2 rounded-full border-pink border z-10">
                    <img
                     className="rounded-full size-20 brightness-125"
                      src="/images/Fadly.jpeg"
                      alt="profile picture"
                    />
                  </div>
                  <div className="space-y-0.5 font-medium text-left ms-3 py-4 px-8 border-l-0 border border-pink relative rounded-r-full right-8 ">
                    <div>Adi Fadly Shaadiqin</div>
                    <div className="text-sm text-gray-500 ">
                      Creative-Lead | Developer | Designer
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg  ">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                  <h3 className="text-lg font-semibold text-gray-900 ">
                    Efficient Collaborating
                  </h3>
                  <p className="my-4">
                    "[PPT] Pemuda pecinta tobrut."
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <div className="p-2 rounded-full border-pink border z-10">
                    <img
                     className="rounded-full size-20 brightness-125"
                      src="/images/Rakha.jpeg"
                      alt="profile picture"
                    />
                  </div>
                  <div className="space-y-0.5 font-medium text-left ms-3 py-4 px-8 border-l-0 border border-pink relative rounded-r-full right-8 ">
                    <div>Rakha Atthoilah</div>
                    <div className="text-sm text-gray-500 ">
                      CEO Google | CEO Microsoft
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            {/* <div className="flex min-w-40 ">
              <div className="rectangle min-w-40 min-h-40 size-20 md:size-40 bg-[url('/images/Wafiyana.jpeg')] bg-cover"></div>

              <div className="wafiyana pl-7">
                <b>Wafiyana Ibrahim</b> <br />
                <br />
                Sebagai ketua dari pembuatan projek ini dan desainer SundaCode
                <br />
              </div>
            </div>

            <div className="flex">
              <div className="rectangle min-w-40 min-h-40 size:w-20 bg-[url('/images/Dzika.jpeg')] bg-cover"></div>

              <div className="dzika pl-7">
                <b>Dzika Aziizil Julfikri</b>
                <br />
                <br />
                Sebagai ide dari pembuat projek Sunda Code ini dan pembuat page
                beranda
                <br />
              </div>
            </div>

            <div className="flex">
              <div className="rectangle min-w-40 min-h-40 md:size-20 bg-[url('/images/Fadly.jpeg')] bg-cover"></div>
              <div className="fadly  pl-7">
                <b>Adi Fadly Shaadiqin</b> <br />
                <br />
                Sebagai pembantu dan pembuat page about us dari projek SundaCode
                ini
                <br />
              </div>
            </div>

            <div className="flex">
              <div className="rectangle min-w-40 min-h-40 md:size-20 bg-[url('/images/Rakha.jpeg')] bg-cover"></div>

              <div className="rakha pl-7">
                <b>Rakha Atthoilah</b>
                <br />
                <br />
                Sebagai pembuat page drama di web sundacode ini
                <br />
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About;
