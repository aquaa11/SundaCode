"use client";
import React, { useEffect } from "react";
import "./header.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faHouse,
  faBook,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  useEffect(() => {
    const initializeEventListeners = () => {
      const hamburgerMenu = document.querySelector("#hamburger-menu");
      hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
      });
      window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        header.classList.toggle("stick", window.scrollY > 0);
      });
      window.addEventListener("resize", () => {
        hamburgerMenu.classList.remove(
          "active",
          hamburgerMenu.classList.contains("active") && window.innerWidth < 768
        );
      });
    };

    initializeEventListeners();

    return () => {
      const hamburgerMenu = document.querySelector("#hamburger-menu");
      hamburgerMenu.removeEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
      });
      window.removeEventListener("scroll", () => {
        const header = document.querySelector("header");
        header.classList.toggle("stick", window.scrollY > 0);
      });
      window.removeEventListener("resize", () => {
        hamburgerMenu.classList.remove(
          "active",
          hamburgerMenu.classList.contains("active") && window.innerWidth < 768
        );
      });
    };
  }, []);
  return (
    <header>
      <nav className="bg-[#560090] fixed w-full z-20 top-0 start-0 bg-opacity-50 backdrop-blur-sm">
        <div className="nav-wrap transition-all duration-500 max-w-screen-xl my-3 mx-5 md:mx-auto flex flex-wrap items-center justify-between md:py-6 md:px-4 text-primary">
          <a href="#" className="flex items-center " aria-label="Refrash Page">
            <span className="self-center mr-2 text-lg font-medium whitespace-nowrap">
              SundaCode
            </span>
            <Image
              src="./svg/logo-sundacode.svg"
              alt="sundacode-logo"
              width="0"
              height="0"
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
          <div
            id="hamburger-menu"
            className="flex flex-col w-11 rounded-t-lg p-2  gap-2 md:hidden"
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
                <a href="index.php" aria-label="to Home Page">
                  <FontAwesomeIcon icon={faHouse}/> Beranda
                </a>
              </li>
              <li>
                <a href="about.php" aria-label="to About Page">
                  <FontAwesomeIcon icon={faUser}/> Tentang Kami
                </a>
              </li>
              <li>
                <a href="kamus.php" aria-label="to Kamus Page">
                  <FontAwesomeIcon icon={faBook}/> Kamus
                </a>
              </li>
              <li>
                <a href="drama.php" aria-label="to Drama Page">
                  <FontAwesomeIcon icon={faVideo}/> Drama
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
