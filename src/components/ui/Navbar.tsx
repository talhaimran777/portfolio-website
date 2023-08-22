"use client";

import Logo from "images/logo.svg";
import Image from "next/image";
import { useState } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="py-6 lg:py-12 text-[#42446E]">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        <Image src={Logo} alt="Talha Imran" height={35} width={35} />
        <div className="hidden lg:block">
          <div className="flex justify-between items-center gap-x-3">
            <a href="https://www.linkedin.com/in/talhaimran777" target="_blank">
              <div className="text-[#7B6BF3] flex justify-center items-center rounded-full border-2 border-[#7B6BF3] p-3 hover:bg-[#7B6BF3] hover:text-white cursor-pointer transition-all">
                <FaLinkedinIn className="text-xl" />
              </div>
            </a>
            <a href="https://github.com/talhaimran777" target="_blank">
              <div className="text-[#7B6BF3] flex justify-center items-center rounded-full border-2 border-[#7B6BF3] p-3 hover:bg-[#7B6BF3] hover:text-white cursor-pointer transition-all">
                <FaGithubAlt className="text-xl" />
              </div>
            </a>
          </div>
        </div>
        <div className="lg:hidden">
          <button
            id="mobile-menu-button"
            className=""
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <ul className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <li>
          <a href="#" className="block">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block">
            About
          </a>
        </li>
        <li>
          <a href="#" className="block">
            Tech Stack
          </a>
        </li>
        <li>
          <a href="#" className="block">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="block">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
