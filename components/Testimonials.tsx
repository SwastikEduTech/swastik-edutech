export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Kumar",
      review:
        "Excellent resume design. Very professional and delivered on time.",
    },
    {
      name: "Priya Sharma",
      review:
        "My PowerPoint presentation looked amazing. Highly recommended!",
    },
    {
      name: "Aman Singh",
      review:
        "Website service was fast and exactly as I wanted.",
    },
  ];

  return (
    <section className="py-24 px-8 bg-black">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-yellow-400">
          What Our Clients Say
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Trusted by students and professionals.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-yellow-400 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300">
                "{item.review}"
              </p>

              <h3 className="mt-6 font-bold text-white">
                {item.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}