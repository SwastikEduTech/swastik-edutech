import {
  FileText,
  Presentation,
  Globe,
  Palette,
  FileEdit,
  Printer,
} from "lucide-react";

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

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300">

            <FileText size={40} className="text-yellow-400 mb-4" />

          <h3 className="text-2xl font-bold text-yellow-400">
            Resume / CV Design
          </h3>
          <p className="mt-3 text-gray-400">
            ATS-friendly resumes for jobs, internships and colleges.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300">
            <Presentation size={40} className="text-yellow-400 mb-4" />
            
          <h3 className="text-2xl font-bold text-yellow-400">
            PowerPoint Presentations
          </h3>
          <p className="mt-3 text-gray-400">
            Attractive presentations for school, college and business.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300">
            <Globe size={40} className="text-yellow-400 mb-4" />

          <h3 className="text-2xl font-bold text-yellow-400">
            Website Development
          </h3>
          <p className="mt-3 text-gray-400">
            Personal, portfolio and business websites.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300">
            <Palette size={40} className="text-yellow-400 mb-4" />

          <h3 className="text-2xl font-bold text-yellow-400">
            Graphic & Logo Design
          </h3>
          <p className="mt-3 text-gray-400">
            Logos, posters, banners and social media designs.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300">
            <FileEdit size={40} className="text-yellow-400 mb-4" />
          <h3 className="text-2xl font-bold text-yellow-400">
            PDF Editing & Typing
          </h3>
          <p className="mt-3 text-gray-400">
            PDF editing, formatting and typing work.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300">
            <Printer size={40} className="text-yellow-400 mb-4" />
          <h3 className="text-2xl font-bold text-yellow-400">
            Printing & Spiral Binding
          </h3>
          <p className="mt-3 text-gray-400">
            Printing, spiral binding and project preparation.
          </p>
        </div>

      </div>
    </section>
  );
}