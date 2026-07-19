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

  if (!name || !phone || !service || !message) {
    alert("Please fill all required fields.");
    return;
  }

  const text = `*New Order - Swastik EduTech*

Name: ${name}
Mobile: ${phone}
Email: ${email || "Not Provided"}
Service: ${service}

Requirement:
${message}`;

  window.open(
    `https://wa.me/919725444653?text=${encodeURIComponent(text)}`,
    "_blank"
  );
};
  return (
    <section
      id="contact"
      className="py-24 bg-black px-6 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400">
          Contact Us
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Have a project in mind? Let's discuss it today.
        </p>

        <div className="w-24 h-1 bg-yellow-400 rounded-full mx-auto mt-4 mb-16"></div>

        
<div className="grid lg:grid-cols-2 gap-10">

  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

    <h3 className="text-3xl font-bold text-yellow-400 mb-2">
  Get In Touch
</h3>

<p className="text-gray-400 mb-8">
  Feel free to contact us anytime. We usually reply within a few minutes on WhatsApp.
</p>

    <div className="space-y-6">

      <div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">
        <h4 className="text-yellow-400 font-semibold">
          📞 Phone
        </h4>

        <a
  href="tel:+919725444653"
  className="text-gray-300 mt-1 block hover:text-yellow-400 transition"
>
  +91 97254 44653
</a>
      </div>

      <div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">
        <h4 className="text-yellow-400 font-semibold">
          💬 WhatsApp
        </h4>

        <p className="text-gray-300 mt-1">
          Available 7 Days
        </p>
      </div>

      <div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">
        <h4 className="text-yellow-400 font-semibold">
          📧 Email
        </h4>

        <a
  href="mailto:gautam018018018@gmail.com"
  className="text-gray-300 mt-1 break-all block hover:text-yellow-400 transition"
>
  gautam018018018@gmail.com
</a>
      </div>

      <div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">
        <h4 className="text-yellow-400 font-semibold">
          📍 Location
        </h4>

        <p className="text-gray-300 mt-1">
          Vapi, Gujarat
        </p>
      </div>

      <div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">
        <h4 className="text-yellow-400 font-semibold">
          🕒 Working Hours
        </h4>

        <p className="text-gray-300 mt-1">
          Monday – Sunday
          <br />
          9:00 AM – 9:00 PM
        </p>
        
      </div>
<a
  href="https://wa.me/919725444653"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 block w-full bg-green-600 hover:bg-green-500 text-white text-center font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
>
  💬 Chat on WhatsApp
</a>
    </div>

  </div>
<form
  onSubmit={handleSubmit}
  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-5"
>

  <h3 className="text-3xl font-bold text-yellow-400">
    Send Your Requirement
  </h3>

  <p className="text-gray-400 mb-6">
    Fill the form below and we'll contact you on WhatsApp.
  </p>

  <input
  type="text"
  placeholder="Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
/>

  <input
    type="tel"
    value={phone}
onChange={(e) => setPhone(e.target.value)}
    placeholder="Mobile Number"
    className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
  />

  <input
    type="email"
    value={email}
onChange={(e) => setEmail(e.target.value)}
    placeholder="Email (Optional)"
    className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
  />

  <select
  value={service}
onChange={(e) => setService(e.target.value)}
    className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
  >
    <option value="Resume Design">Resume Design</option>
<option value="Logo Design">Logo Design</option>
<option value="Poster Design">Poster Design</option>
<option value="Certificate Design">Certificate Design</option>
<option value="PowerPoint Presentation">PowerPoint Presentation</option>
<option value="PDF Editing">PDF Editing</option>
<option value="Typing Work">Typing Work</option>
<option value="Printing">Printing</option>
<option value="Spiral Binding">Spiral Binding</option>
<option value="Website Development">Website Development</option>
  </select>

  <textarea
    rows={5}
    value={message}
onChange={(e) => setMessage(e.target.value)}
    placeholder="Write your requirement..."
    className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
  ></textarea>

  <button
  type="submit"
    className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl shadow-lg shadow-yellow-500/20 hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-[1.02]"
  >
    Send Request on WhatsApp →
  </button>

</form>
</div>
      
      </div>
    </section>
  );
}