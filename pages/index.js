"use client"
import React from "react";
import Link from "next/link";
export default function Home() {
  useEffect(() => {
    if (!window.location.pathname.endsWith("/")) {
      window.history.pushState(null, "", window.location.pathname + "/");
    }
  }, []);
  const handleExplore = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };
  return (
    <main>
      <section className="w-full px-5">
        <div className="text-left sm:text-center mt-48 sm:mt-56 text-2xl sm:text-3xl font-extrabold sm:font-semibold">
          <h3>
            Tempatnya Mengenal <br /> Budaya Indonesia Lebih Jauh
          </h3>
          <p className="mt-2 text-left font-light  sm:text-center text-sm sm:font-normal  sm:text-base">
            Kami membuat sesuatu yang baru untuk <br /> melestarikan budaya
            Indonesia
          </p>
          <button
            aria-label="to explore"
            onClick={handleExplore}
            className="mt-6 border border-transparent bg-primary hover:border-white transition-all text-white font-light text-sm px-4 py-2"
          >
            Mulai Menjelajah
          </button>
        </div>
      </section>
      <section className="mt-64 sm:mt-72 bg-primary px-3 sm:px-14 py-4 sm:py-5">
        <div className="absolute left-1/2 -translate-x-1/2 bg-primary py-2 px-6 sm:px-10 rounded text-white -translate-y-12 font-medium sm:font-bold">
          Proyek Kami
        </div>
        <div className="px-5 pt-6 pb-8 pb sm:py-6 sm:px-8 bg-white flex w-full max-w-screen-xl flex-col sm:flex-row mx-auto gap-5 sm:gap-10">
          <div className="bg-white p-2 border-pink border w-full sm:w-1/2 h-80 sm:h-[22rem] overflow-hidden">
            <img src="/KamusSundacode.png" alt="banner-1"></img>
            <img src="/KamusSundacode.png" alt="banner-1"></img>
          </div>
          <div className="w-full sm:w-1/2">
            <h1 className="text-lg sm:text-2xl text-pink font-bold">
              Kamus Pemograman
            </h1>
            <p className="text-sm mt-2 font-light ml-[1px]">
              Menyediakan berbagai kosakata berkaitan dengan pemograman beserta
              terjemahan ke bahasa Sunda dan juga contoh kodenya!
            </p>
            <button aria-label="to kamus" className="mt-6">
              <Link
                href="/kamus"
                className="px-4 py-2 bg-pink border border-pink hover:bg-white hover:text-pink transition-all text-white font-medium text-sm"
                aria-label="to kamus"
              >
                Coba Kamus !
              </Link>
            </button>
          </div>
        </div>
        <div className="px-5 border border-pink pt-6 pb-8 my-10 sm:py-6 sm:px-8 flex w-full flex-col sm:flex-row max-w-screen-xl mx-auto gap-5 sm:gap-10">
          <div className="w-full sm:w-1/2 order-2 sm:order-1">
            <h1 className="text-lg sm:text-2xl text-pink font-bold ">
              Pamali [ Drama Sunda ]
            </h1>
            <p className="text-sm mt-2 font-light ml-[1px] text-white">
              Menyajikan sebuah film bertema horror yang berkaitan dengan budaya
              dan adat Sunda. Akan ada sosok hitam yang sedang menunggu di dalam
              film ini !
            </p>
            <button aria-label="to kamus" className="mt-6">
              <Link
                href="/drama"
                className="px-4 py-2 bg-pink  border border-pink hover:bg-primary hover:text-pink transition-all text-white font-medium text-sm"
                aria-label="to drama"
              >
                Cek Selengkapnya
              </Link>
            </button>
          </div>
          <div className="overflow-hidden bg-white sm:bg-center md:w-1/4">
            <img src="/poster-pamali.jpg" alt="banner-2"></img>
          </div>
        </div>
        <div className="px-5 py-6 sm:px-8 bg-white flex w-full max-w-screen-xl flex-col sm:flex-row mx-auto gap-5 sm:gap-10">
          <div className="bg-white w-full sm:w-1/2">
            <div className="w-full brightness-50 hover:brightness-75 transition-all overflow-hidden">
              <img src="/kelompok-raizan.png" alt="banner-3"></img>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <h1 className="text-lg sm:text-2xl text-pink font-bold">
              Rerencangan <span> [ Drama Sunda ]</span>
            </h1>
            <p className="text-sm mt-2 font-light ml-[1px]">
              Menceritakan keseharian orang Sunda tentang berbagai macam hal
              dalam pertemanan dan konflik-konflik lucu yang sering terjadi
              antara sesama teman tersebut.
            </p>
            <button aria-label="to kamus" className="mt-6">
              <Link
                href="/drama"
                className="px-4 py-2 bg-pink border border-pink hover:bg-white hover:text-pink transition-all text-white font-medium text-sm"
                aria-label="to drama"
              >
                Cek Selengkapnya
              </Link>{" "}
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto mt-16">
        <div className="text-center">
          <h3 className="text-xl sm:text-3xl font-bold">DIBUAT MENGGUNAKAN</h3>
        </div>
        <div className="justify-center flex flex-wrap mx-auto mt-10 gap-10">
          <div className="size-32 hover:grayscale transition-all hover:scale-125">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
              <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
              <path
                d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="size-32 hover:grayscale transition-all hover:scale-125">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
              <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
              <path
                d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="size-32 hover:grayscale transition-all hover:scale-125">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <title>file_type_js_official</title>
              <rect x="2" y="2" width="28" height="28" fill="#f5de19" />
              <path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z" />
            </svg>
          </div>
          <div className="size-32 hover:grayscale transition-all hover:scale-125">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z"
                fill="#1ABCFE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z"
                fill="#0ACF83"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
                fill="#FF7262"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z"
                fill="#F24E1E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z"
                fill="#A259FF"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
