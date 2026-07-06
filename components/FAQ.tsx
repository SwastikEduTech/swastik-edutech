"use client";

import { useState } from "react";
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      q: "How can I place an order?",
      a: "You can select a service and send us a WhatsApp message directly from the website.",
    },
    {
      q: "How much time does delivery take?",
      a: "Most services are delivered within 24 to 48 hours depending on complexity.",
    },
    {
      q: "What payment methods are available?",
      a: "Currently we accept UPI and bank transfer.",
    },
    {
      q: "Can I request changes after delivery?",
      a: "Yes, minor revisions are included in most services.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {faqs.map((item, index) => (
  <div
    key={index}
    onClick={() =>
      setOpenIndex(openIndex === index ? null : index)
    }
    className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-yellow-500 transition cursor-pointer"
  
            >
             <div className="flex justify-between items-center">
  <h3 className="text-xl font-semibold text-yellow-400">
    {item.q}
  </h3>

  <span className="text-2xl text-yellow-400 font-bold">
    {openIndex === index ? "−" : "+"}
  </span>
</div>
              {openIndex === index && (
  <p className="text-gray-400 mt-2">
    {item.a}
  </p>
)}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}