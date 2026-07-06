export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-black text-white px-8"
    >
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
        Our Portfolio
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Some of our recent digital work.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-yellow-400 transition">
          <h3 className="text-2xl font-bold text-yellow-400">
            Resume Design
          </h3>

          <p className="mt-4 text-gray-400">
            Professional ATS-friendly resume with modern layout.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-yellow-400 transition">
          <h3 className="text-2xl font-bold text-yellow-400">
            Business Website
          </h3>

          <p className="mt-4 text-gray-400">
            Responsive websites for students and businesses.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-yellow-400 transition">
          <h3 className="text-2xl font-bold text-yellow-400">
            Poster & Logo Design
          </h3>

          <p className="mt-4 text-gray-400">
            Creative posters, logos and social media graphics.
          </p>
        </div>

      </div>
    </section>
  );
}