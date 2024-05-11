import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="font-['Lexend'] pt-16 px-4 mx-auto max-w-screen-xl">
      <button className="mx-auto flex gap-2 font-medium text-2xl items-center mb-7">
        <a href="" aria-label="to Refrash Page">
          SundaCode
        </a>
        <Image
          src="./svg/logo-sundacode.svg"
          alt="sundacode-logo"
          width={17}
          height={17}
        />
      </button>
      <div>
        <span className="font-semibold text-lg mb-3">Contact us</span>
        <p className="text-sm">
          Anda ingin bekerja sama dengan kami? Hubungi kami di sini!
          sundacode@gmail.com
        </p>
        <div className="my-3">
          <ul className="flex gap-2 text-2xl">
            <li>
              <a href="" aria-label="to Github Sundacode">
              <FontAwesomeIcon icon={faGithub}/>
              </a>
            </li>
            <li>
              <a
                aria-label="to Instagram Sundacode"
                target="_blank"
                href="https://www.instagram.com/x_pplga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                <FontAwesomeIcon icon={faInstagram}/>
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

export default Footer;
