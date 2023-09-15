import React from "react";
import TestiCard from "./TestiCard";

export default function Testimoni({ testi }) {
  return (
    <div className="bg-white py-16">
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold">
            Why they buy our product?
          </h2>
          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            {testi.map((testim) => (
              <TestiCard testi={testim} key={testi.username} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
