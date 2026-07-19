import Image from "next/image";
import { whatsappOrder } from "../lib/whatsapp";

const portfolio = [
  {
    title: "Resume Design",
    image: "/portfolio/resume.jpg",
     service: "Resume Design",
    category: "Resume",
    price: "₹49",
    description: "Professional ATS-friendly Resume Design",
  },
  {
    title: "Logo Design",
    image: "/portfolio/logo.jpg",
    service: "Logo Design",
    category: "Logo",
    price: "₹49",
    description: "Creative Business Logo Design",
  },
  {
    title: "Poster Design",
    image: "/portfolio/poster.jpg",
    service: "Poster Design",
    category: "Poster",
    price: "₹99",
    description: "Modern Poster & Social Media Design",
  },
  {
    title: "Certificate Design",
    image: "/portfolio/certificate.jpg",
    service: "Certificate Design",
    category: "Certificate",
    price: "₹99",
    description: "Professional Certificate Design",
  },
  {
    title: "PowerPoint Presentation",
    image: "/portfolio/ppt.jpg",
    service: "PowerPoint Presentation",
    category: "PowerPoint",
    price: "Starting ₹500",
    description: "Professional Presentation Slides",
  },
  {
    title: "Website Development",
    image: "/portfolio/website.jpg",
    service: "Website Development",
    category: "Website",
    price: "Starting ₹3499",
    description: "Modern Responsive Website Development",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-black px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400">
          Our Portfolio
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Some of our recent and upcoming projects.
        </p>

        <div className="w-24 h-1 bg-yellow-400 rounded-full mx-auto mt-4 mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {portfolio.map((item, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(250,204,21,0.18)] transition-all duration-300"
            >

              <div className="relative h-56 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>
<div className="flex justify-between items-center mt-4">

  <span className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-sm">
    {item.category}
  </span>

  <span className="font-bold text-yellow-400">
    {item.price}
  </span>

</div>
                <p className="text-gray-400 mt-3">
  {item.description}
</p>

                <a
                  href={whatsappOrder(item.service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-xl transition"
                >
                  Order Now →
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}