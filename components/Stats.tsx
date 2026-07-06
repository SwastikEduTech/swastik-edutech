export default function Stats() {
  const stats = [
    {
      number: "100+",
      title: "Orders Completed",
    },
    {
      number: "24 Hours",
      title: "Fast Delivery",
    },
    {
      number: "100%",
      title: "Customer Support",
    },
    {
      number: "7 Days",
      title: "Available",
    },
  ];

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-4xl font-bold text-yellow-400">
              {item.number}
            </h2>

            <p className="text-gray-400 mt-3">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}