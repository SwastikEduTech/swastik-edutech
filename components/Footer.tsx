export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-8">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-yellow-400">
            Swastik EduTech
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
  We provide affordable and high-quality digital services including Resume Design, Logo Design, Website Development, PowerPoint Presentations and much more.
</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">
           <li>
  <a href="#home" className="text-gray-400 hover:text-yellow-400 transition">
    Home
  </a>
</li>

<li>
  <a href="#services" className="text-gray-400 hover:text-yellow-400 transition">
    Services
  </a>
</li>

<li>
  <a href="#portfolio" className="text-gray-400 hover:text-yellow-400 transition">
    Portfolio
  </a>
</li>

<li>
  <a href="#pricing" className="text-gray-400 hover:text-yellow-400 transition">
    Pricing
  </a>
</li>

<li>
  <a href="#contact" className="text-gray-400 hover:text-yellow-400 transition">
    Contact
  </a>
</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            📧 gautam018018018@gmail.com
          </p>

          <p className="text-gray-400 mt-2">
            📱 +91 9725444653
          </p>

          <p className="text-gray-400 mt-2">
            📍 Vapi, Gujarat
          </p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-zinc-800 pt-6">
        © 2026 Swastik EduTech. All Rights Reserved.
      </div>

    </footer>
  );
}