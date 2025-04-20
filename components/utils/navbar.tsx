"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import Logo from "./Logo";

// Navigation links
const navLinks = [
  { href: "/team", label: "تیم" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 rtl transition-colors duration-500 backdrop-blur-sm shadow-sm bg-[#f0f9fe] text-[#3b2f2f]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-inherit"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl overflow-hidden"
        >
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-irsans-medium">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="transition-colors duration-300 hover:text-[#b0422e]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden shadow-md md:hidden bg-[#f0f9fe]"
          >
            <nav className="flex flex-col items-start p-4 gap-4 font-irsans-medium text-base text-inherit">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="transition-colors duration-200 hover:text-[#b0422e]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
