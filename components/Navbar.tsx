"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Swastik EduTech Logo"
            width={50}
            height={50}
          />

          <div>
            <h1 className="text-2xl font-bold text-yellow-400">
              Swastik EduTech
            </h1>

            <p className="text-xs text-gray-400">
              Learn. Create. Grow.
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#portfolio" className="hover:text-yellow-400">Portfolio</a>
          <a href="#pricing" className="hover:text-yellow-400">Pricing</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>
<div className="md:hidden">
  <button onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
</div>
{menuOpen && (
  <div className="absolute top-full left-0 w-full bg-black border-t border-zinc-800 md:hidden">
    <div className="flex flex-col p-6 space-y-4">

      <a
        href="#"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400"
      >
        Home
      </a>

      <a
        href="#services"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400"
      >
        Services
      </a>

      <a
        href="#portfolio"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400"
      >
        Portfolio
      </a>

      <a
        href="#pricing"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400"
      >
        Pricing
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400"
      >
        Contact
      </a>

    </div>
  </div>
)}
      </div>
    </nav>
  );
}