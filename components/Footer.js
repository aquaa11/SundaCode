import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="pt-28 px-4 mx-auto max-w-screen-xl">
      <div>
        <button className=" flex gap-2 font-medium text-2xl items-center mb-6 ">
          <a href="" aria-label="to Refrash Page">
            SundaCode
          </a>
          <img
            src="../public/svg/logo-sundacode.svg"
            alt="logo-sundacode"
            className="w-4 self-center"
          />
        </button>
      </div>
      <div>
        <span className="font-semibold text-lg block mt-6 mb-1">
          Contact us
        </span>
        <p className="text-sm">
          Anda ingin bekerja sama dengan kami? Hubungi kami di sini!
          sundacode@gmail.com
        </p>
        <div className="my-3">
          <ul className="flex gap-2 text-2xl">
            <li>
              <a
                href="https://github.com/aquaa11"
                target="_blank"
                aria-label="to Github Sundacode"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                aria-label="to Instagram Sundacode"
                target="_blank"
                href="https://www.instagram.com/x_pplga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
        <hr className="border-primary" />
        <div className="my-3 text-sm">
          © 2024{" "}
          <span className="underline">
            <a href="" aria-label="to Refrash Page">
              SundaCode
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
