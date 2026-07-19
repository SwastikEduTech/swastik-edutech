import { whatsappOrder } from "../lib/whatsapp";
const designServices = [
  {
    title: "Resume Design (Basic)",
    price: "₹49",
    popular: false,
    features: [
      "ATS Friendly Resume",
      "PDF Included",
      "Print Ready",
      "24 Hours Delivery",
    ],
  },
  {
    title: "Resume Design (Advance)",
    price: "₹99",
    popular: true,
    features: [
  "ATS Friendly Resume",
  "Modern Premium Design",
  "Editable Source File",
  "PDF Included",
  "Unlimited Revisions",
],
  },
  {
    title: "Logo Design (Basic)",
    price: "₹49",
    popular: false,
    features: [
  "Professional Brand Logo",
  "Transparent PNG",
  "Editable Source File",
  "HD Quality",
],
  },
  {
    title: "Logo Design (Advance)",
    price: "₹99",
    popular: true,
    features: [
      "Professional Design",
      "Editable Source",
      "Transparent PNG",
      "HD Quality",
    ],
  },
  {
    title: "Poster Design",
    price: "₹99",
    popular: false,
    features: [
      "Custom Design",
      "High Resolution",
      "Print Ready",
    ],
  },
  {
    title: "Certificate Design",
    price: "₹99",
    popular: false,
    features: [
      "Professional Layout",
      "Editable Design",
      "Print Ready",
    ],
  },
];

const documentServices = [
  {
    title: "PDF Editing",
    price: "₹49",
    features: [
      "Fast Editing",
      "High Accuracy",
      "PDF Ready",
    ],
  },
  {
    title: "Typing Work",
    price: "₹15 / Page",
    features: [
      "English & Hindi",
      "Proper Formatting",
      "Fast Delivery",
    ],
  },
  {
    title: "Printing",
    price: "Starting from ₹30",
    features: [
  "Black & White Printing",
  "Color Printing",
  "Final Price on Page Count",
],
  },
  {
    title: "Spiral Binding",
    price: "Starting from ₹50",
    features: [
  "Project Binding",
  "Assignment Binding",
  "Price Depends on Pages",
],
  },
];

const digitalServices = [
  {
    title: "PowerPoint Presentation",
    price: "Starting ₹500",
    popular: true,
    features: [
      "Up to 50 Slides",
      "Professional Design",
      "₹10 Per Extra Slide",
    ],
  },
  {
    title: "Website Development",
    price: "Starting ₹3499",
    popular: true,
    features: [
      "Responsive Website",
      "Modern Design",
      "SEO Friendly",
      "Free Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-zinc-950 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400">
          Our Services & Pricing
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Affordable digital services for students and professionals.
        </p>
{/* Design Services */}

<div className="mt-20">

  <h3 className="text-3xl font-bold text-yellow-400">
  Design Services
</h3>

<div className="w-24 h-1 bg-yellow-400 rounded-full mt-3 mb-10"></div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {designServices.map((service, index) => (

      <div
        key={index}
        className="h-full flex flex-col justify-between bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(250,204,21,0.18)] transition-all duration-300"
      >

        {service.popular && (
          <span className="absolute top-5 right-5 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            ⭐ Popular
          </span>
        )}

        <h4 className="text-2xl font-bold text-white">
          {service.title}
        </h4>

        <p className="text-5xl font-extrabold text-yellow-400 mt-4">
          {service.price}
        </p>

        <ul className="mt-6 space-y-3 text-gray-400">
          {service.features.map((feature, i) => (
            <li key={i}>✔ {feature}</li>
          ))}
        </ul>

        <a
          href={whatsappOrder(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl transition duration-300"
        >
          Order Now →
        </a>

      </div>

    ))}

  </div>

</div>
{/* Document Services */}

<div className="mt-20">

  <h3 className="text-3xl font-bold text-yellow-400">
  Document Services
</h3>

<div className="w-24 h-1 bg-yellow-400 rounded-full mt-3 mb-10"></div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {documentServices.map((service, index) => (

      <div
        key={index}
        className="h-full flex flex-col justify-between bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(250,204,21,0.18)] transition-all duration-300"
      >

        <h4 className="text-xl font-bold text-white">
          {service.title}
        </h4>

        <p className="text-5xl font-extrabold text-yellow-400 mt-4">
          {service.price}
        </p>

        <ul className="mt-5 space-y-2 text-gray-400">
          {service.features.map((feature, i) => (
            <li key={i}>✔ {feature}</li>
          ))}
        </ul>

        <a
          href={whatsappOrder(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl transition"
        >
          Order Now →
        </a>

      </div>

    ))}

  </div>

</div>

{/* Digital Services */}

<div className="mt-20">

  <h3 className="text-3xl font-bold text-yellow-400">
  Digital Services
</h3>

<div className="w-24 h-1 bg-yellow-400 rounded-full mt-3 mb-10"></div>

  <div className="grid md:grid-cols-2 gap-8">

    {digitalServices.map((service, index) => (

      <div
        key={index}
        className="h-full flex flex-col justify-between bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(250,204,21,0.18)] transition-all duration-300"
      >

        {service.popular && (
          <span className="absolute top-5 right-5 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            ⭐ Best Seller
          </span>
        )}

        <h4 className="text-2xl font-bold text-white">
          {service.title}
        </h4>

        <p className="text-5xl font-extrabold text-yellow-400 mt-4">
          {service.price}
        </p>

        <ul className="mt-6 space-y-3 text-gray-400">
          {service.features.map((feature, i) => (
            <li key={i}>✔ {feature}</li>
          ))}
        </ul>

        <a
          href={whatsappOrder(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl transition"
        >
          Order Now →
        </a>

      </div>

    ))}

  </div>

</div>
      </div>
    </section>
  );
}