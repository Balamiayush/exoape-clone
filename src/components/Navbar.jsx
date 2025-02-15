import React, { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import { stagger } from "framer-motion";
// import { Power4 } from "gsap/Ease";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu and disable/enable body scroll
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  // GSAP animations for menu and hamburger icon
  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        transform: "translate3d(0%, 0%, 0)",
        height: "100vh",
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        rotateZ: "0deg",
        duration: 2,
        // ease: "power2.inOut",
      });
      gsap.to(".line-1", {
        rotate: 45,
        y: 5,
        duration: 0.3,
        ease: "power3.inOut",
      });
      gsap.to(".line-2", { opacity: 0, duration: 0.3, ease: "power3.inOut" });
      gsap.to(".line-3", {
        rotate: -45,
        y: -5,
        duration: 0.3,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(menuRef.current, {
        height: "50vh",
        clipPath: "polygon(0 0, 100% 0%, 100% 0%, 0% 0%)",
        transform: "translate3d(-60%, -100%, 0)",
        rotateZ: "-20deg",
        duration: 2,
        // ease: "power2.inOut",
      });
      gsap.to(".line-1", {
        rotate: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.inOut",
      });
      gsap.to(".line-2", { opacity: 1, duration: 0.3, ease: "power3.inOut" });
      gsap.to(".line-3", {
        rotate: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar - Hidden when scrolling */}
      <nav
        className={`hidden md:flex justify-between items-center w-full h-20 px-6 fixed top-0 left-0 text-white z-50 transition-opacity duration-300 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <motion.div
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
         className="left-nav flex items-center gap-2">
          <img src={logo} className="w-20 cursor-pointer" alt="logo" />
        </motion.div>
        <motion.div
          stagger={0.2}
          className="right-nav flex items-center gap-10"
        >
          {["Work", "Studio", "News", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 ,
              delay:index*0.2
              }}
              href="#"
              className="text-xl"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </nav>

      {/* Mobile Navbar - Visible on scroll, hidden at top */}
      <div className="w-full main ">
        <div
          className={`fixed top-0 left-0 right-0 z-50 px-5 h-16 flex justify-between items-center ${
            isScrolled ? "block" : "hidden"
          }`}
        >
          <img src={logo} className="w-20 cursor-pointer" alt="logo" />

          {/* Hamburger Icon */}
          <div
            onClick={handleMenu}
            className="cursor-pointer z-[400] flex flex-col gap-1 items-center justify-center w-10 h-10"
          >
            <div className="line line-1 bg-white w-8 h-[2px]"></div>
            <div className="line line-2 bg-white w-8 h-[2px]"></div>
            <div className="line line-3 bg-white w-8 h-[2px]"></div>
          </div>
        </div>

        {/* Mobile Menu - No scrolling when open */}
        <div
          ref={menuRef}
          className="fixed  top-0 left-0 w-full h-full z-10 bg-[#0D0E13] text-white flex flex-col items-center justify-center gap-6 overflow-hidden"
        >
          <div className="right-nav flex items-center gap-5 flex-col text-[4rem]">
            <a href="#" onClick={handleMenu}>
              Work
            </a>
            <a href="#" onClick={handleMenu}>
              Studio
            </a>
            <a href="#" onClick={handleMenu}>
              News
            </a>
            <a href="#" onClick={handleMenu}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
