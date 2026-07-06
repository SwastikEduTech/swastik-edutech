export default function HowItWorks() {
  const steps = [
    {
      no: "01",
      title: "Choose a Service",
      desc: "Select the service you need from our website.",
    },
    {
      no: "02",
      title: "Send WhatsApp Request",
      desc: "Share your requirements with us on WhatsApp.",
    },
    {
      no: "03",
      title: "Confirm Order",
      desc: "We'll discuss the details and confirm your order.",
    },
    {
      no: "04",
      title: "Get Fast Delivery",
      desc: "Receive your work on time with quality assurance.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-yellow-400">
          How It Works
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14">
          Getting your work done is simple.
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step) => (
            <div
              key={step.no}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300"
            >
              <div className="text-5xl font-bold text-yellow-400">
                {step.no}
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}