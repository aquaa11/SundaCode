"use client";
import React, { useEffect } from "react";
import "./Header.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faVideo,
  faHouse,
  faBook,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const toggleMenu = () => {
    const hamburgerMenu = document.querySelector("#hamburger-menu");
    hamburgerMenu.classList.toggle("active");
  };

  const handleScroll = () => {
    const header = document.querySelector("header");
    header.classList.toggle("stick", window.scrollY > 0);
  };

  const handleResize = () => {
    const hamburgerMenu = document.querySelector("#hamburger-menu");
    hamburgerMenu.classList.remove(
      "active",
      hamburgerMenu.classList.contains("active") && window.innerWidth < 768
    );
  };

  useEffect(() => {
    const hamburgerMenu = document.querySelector("#hamburger-menu");
    hamburgerMenu.addEventListener("click", toggleMenu);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      hamburgerMenu.removeEventListener("click", toggleMenu);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav className="bg-[#560090] fixed w-full z-20 top-0 start-0 bg-opacity-50 backdrop-blur-sm">
        <div className="nav-wrap transition-all duration-300 max-w-screen-xl my-3 mx-5 md:mx-auto flex flex-wrap items-center justify-between py-3 md:py-6 md:px-4 text-primary">
          <a href="#" className="flex items-center " aria-label="Refrash Page">
            <span className="self-center mr-2 text-lg font-medium whitespace-nowrap">
              SundaCode
            </span>
            <Image
              src="./svg/logo-sundacode.svg"
              alt="sundacode-logo"
              width="0"
              height="0"
              style={{ width: "100%", height: "auto" }}
            />
          </a>
          <div
            id="hamburger-menu"
            className="flex flex-col w-11 rounded-t-lg p-2 gap-2 md:hidden "
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div
            className="items-center hidden w-full md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul
              className="
  hidden text-sm md:flex-row md:flex"
            >
              <li>
                <span>
                  <Link href="/" aria-label="to Home Page">
                    <FontAwesomeIcon icon={faHouse} className="text-xs mr-2" />
                    Beranda
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <Link href="/about" aria-label="to About Page">
                    <FontAwesomeIcon icon={faUser} className="text-xs mr-2" />
                    Tentang Kami
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <Link href="/kamus" aria-label="to Kamus Page">
                    <FontAwesomeIcon icon={faBook} className="text-xs mr-2" />
                    Kamus
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <Link href="/drama" aria-label="to Drama Page">
                    <FontAwesomeIcon icon={faVideo} className="text-xs mr-2" />
                    Drama
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
