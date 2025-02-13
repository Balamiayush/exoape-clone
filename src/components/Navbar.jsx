import React, { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { x: "-100%", y: "-100%", duration: 0.5, ease: "power3.out" });
      gsap.to(".line-1", { rotate: 45, y: 5, duration: 0.3 });
      gsap.to(".line-2", { opacity: 0, duration: 0.3 });
      gsap.to(".line-3", { rotate: -45, y: -5, duration: 0.3 });
    } else {
      gsap.to(menuRef.current, { x: 0, y: 0, duration: 0.5, ease: "power3.in" });
      gsap.to(".line-1", { rotate: 0, y: 0, duration: 0.3 });
      gsap.to(".line-2", { opacity: 1, duration: 0.3 });
      gsap.to(".line-3", { rotate: 0, y: 0, duration: 0.3 });
    }
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center w-full h-20 px-6 fixed top-0 left-0  text-white z-50">
        <div className="left-nav flex items-center gap-2">
          <img src={logo} className="w-20 cursor-pointer" alt="logo" />
        </div>
        <div className="right-nav flex items-center gap-10">
          <a href="#">Work</a>
          <a href="#">Studio</a>
          <a href="#">News</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50  px-5 h-16 flex justify-between items-center">
        {/* Logo */}
        <img src={logo} className="w-20 cursor-pointer" alt="logo" />

        {/* Hamburger Icon */}
        <div ref={menuIconRef} onClick={handleMenu} className="cursor-pointer flex flex-col gap-1">
          <div className="line line-1 bg-white w-8 h-[2px]"></div>
          <div className="line line-2 bg-white w-8 h-[2px]"></div>
          <div className="line line-3 bg-white w-8 h-[2px]"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed  h-full w-full bg-[#0D0E13] text-white flex flex-col items-center justify-center gap-6 transform translate-x-full md:hidden"
      >
        <a href="#" onClick={handleMenu}>Work</a>
        <a href="#" onClick={handleMenu}>Studio</a>
        <a href="#" onClick={handleMenu}>News</a>
        <a href="#" onClick={handleMenu}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;
