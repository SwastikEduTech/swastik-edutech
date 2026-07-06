"use client";

import { useState } from "react";
export default function Contact() {

    const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const text = `*New Order - Swastik EduTech*

👤 Name: ${name}
📱 Mobile: ${phone}
📧 Email: ${email}
🛠️ Service: ${service}

📝 Requirement:
${message}`;

  const url = `https://wa.me/919725444653?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
};

  return (
    <section
      id="contact"
      className="py-24 bg-black px-8"
    >
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-yellow-400">
          Contact Us
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Need any digital service? Fill the form below and we'll contact you.
        </p>

        <form
  onSubmit={handleSubmit}
  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-5"
>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-lg bg-zinc-800 outline-none"
          />

          <input
            type="tel"
            value={name}
onChange={(e) => setName(e.target.value)}
            placeholder="Mobile Number"
            className="w-full p-4 rounded-lg bg-zinc-800 outline-none"
          />

          <input
            type="email"
            value={email}
onChange={(e) => setEmail(e.target.value)}
            placeholder="Email (Optional)"
            className="w-full p-4 rounded-lg bg-zinc-800 outline-none"
          />

          <select
          value={service}
onChange={(e) => setService(e.target.value)}
 className="w-full p-4 rounded-lg bg-zinc-800 outline-none">
            <option>Select Service</option>
            <option>Resume / CV Design</option>
            <option>PowerPoint Presentation</option>
            <option>Website Development</option>
            <option>Graphic Design</option>
            <option>Logo Design</option>
            <option>Poster Design</option>
            <option>Certificate Design</option>
            <option>PDF Editing</option>
            <option>Typing Work</option>
            <option>Printing & Spiral Binding</option>
          </select>

          <textarea
          value={message}
onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="Write your requirement..."
            className="w-full p-4 rounded-lg bg-zinc-800 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-lg"
          >
            Send Request
          </button>

        </form>

      </div>
    </section>
  );
}