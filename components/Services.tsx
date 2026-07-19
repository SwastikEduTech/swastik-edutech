import {
  FileText,
  Presentation,
  Globe,
  Palette,
  FileEdit,
  Printer,
} from "lucide-react";
import { whatsappOrder } from "../lib/whatsapp";

const services = [
  {
    icon: FileText,
    title: "Resume / CV Design",
    description: "ATS-friendly resumes for jobs, internships and colleges.",
    service: "Resume / CV Design",
  },
  {
    icon: Presentation,
    title: "PowerPoint Presentations",
    description: "Attractive presentations for school, college and business.",
    service: "PowerPoint Presentation",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Personal, portfolio and business websites.",
    service: "Website Development",
  },
  {
    icon: Palette,
    title: "Graphic & Logo Design",
    description: "Logos, posters, banners and social media designs.",
    service: "Graphic & Logo Design",
  },
  {
    icon: FileEdit,
    title: "PDF Editing & Typing",
    description: "PDF editing, formatting and typing work.",
    service: "PDF Editing & Typing",
  },
  {
    icon: Printer,
    title: "Printing & Spiral Binding",
    description: "Printing, spiral binding and project preparation.",
    service: "Printing & Spiral Binding",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto py-24 px-8"
    >
      <h2 className="text-4xl font-bold text-center text-yellow-400">
        Our Services
      </h2>

      <p className="text-center text-gray-400 mt-4 mb-12">
        Everything students need in one place.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300"
            >
              <Icon size={42} className="text-yellow-400 mb-5" />

              <h3 className="text-2xl font-bold text-yellow-400">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.description}
              </p>

              <a
                href={whatsappOrder(item.service)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl transition-all duration-300"
              >
                Order Now →
              </a>
            </div>
          );
        })}

      </div>
    </section>
  );
}