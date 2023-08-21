"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="py-6 lg:py-12 text-[#42446E]">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        <div className="font-semibold text-xl lg:text-2xl text-[#7B6BF3]">
          Talha Imran
        </div>
        <div className="hidden lg:block">
          <ul className="space-x-[67px]">
            <li className="inline-block">
              <a href="#" className="text-xl">
                Home
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="text-xl">
                About
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="text-xl">
                Tech Stack
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="text-xl">
                Projects
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="text-xl">
                Contact
              </a>
            </li>
          </ul>
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
