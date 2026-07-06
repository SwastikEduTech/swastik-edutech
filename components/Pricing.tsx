export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-zinc-950 px-8"
    >
      <h2 className="text-4xl font-bold text-center text-yellow-400">
        Pricing Plans
      </h2>

      <p className="text-center text-gray-400 mt-4 mb-12">
        Affordable pricing for every student.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300">
          <h3 className="text-2xl font-bold">Basic</h3>

          <p className="text-5xl font-bold text-yellow-400 mt-5">
            ₹199
          </p>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Resume Design</li>
            <li>✔ PDF Editing</li>
            <li>✔ Typing Work</li>
          </ul>
          <a
  href="https://wa.me/919725444653"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-lg transition"
>
  Order Now
</a>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl border border-yellow-500 scale-105 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300">
          <div className="inline-block bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full mb-4">
  ⭐ Most Popular
</div>
          <h3 className="text-2xl font-bold">Popular</h3>

          <p className="text-5xl font-bold mt-5">
            ₹499
          </p>

          <ul className="mt-6 space-y-3">
            <li>✔ Resume + PPT</li>
            <li>✔ Poster Design</li>
            <li>✔ Certificate Design</li>
            <li>✔ Fast Delivery</li>
          </ul>
          <a
  href="https://wa.me/919725444653"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-lg transition"
>
  Order Now
</a>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300">
          <h3 className="text-2xl font-bold">Premium</h3>

          <p className="text-5xl font-bold text-yellow-400 mt-5">
            ₹999+
          </p>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Website Development</li>
            <li>✔ Logo Design</li>
            <li>✔ Graphic Design</li>
            <li>✔ Priority Support</li>
          </ul>
          <a
  href="https://wa.me/919725444653"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-lg transition"
>
  Order Now
</a>
        </div>

      </div>
    </section>

  );
}