"use client";
import { whatsappOrder } from "../lib/whatsapp";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="absolute w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl top-20 left-1/2 -translate-x-1/2"></div>

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={180}
          height={180}
          loading="eager"
          className="mb-8 drop-shadow-[0_0_25px_rgba(250,204,21,0.5)]"
        />

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
          Swastik EduTech
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl">
          Professional Digital Services for Students & Professionals
        </p>

        <p className="mt-6 text-gray-400 max-w-3xl">
          Resume Design • Website Development • PowerPoint • Graphic Design •
          Logo Design • Poster Design • PDF Editing • Typing Work • Printing &
          Spiral Binding
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
  href={whatsappOrder("General Inquiry")}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-600 hover:bg-green-500 px-8 py-4 rounded-xl font-bold transition duration-300"
>
  WhatsApp Now
</a>

          <a
            href="#services"
            className="border border-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            View Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}