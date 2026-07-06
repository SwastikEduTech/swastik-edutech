export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-8">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-yellow-400">
            Swastik EduTech
          </h2>

          <p className="text-gray-400 mt-4">
            Professional Digital Services for Students &
            Professionals.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
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