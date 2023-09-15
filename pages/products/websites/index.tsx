import Layout from "@/components/Layout";
import WebProductHero from "@/components/WebProductHero";
import React from "react";
import { loadFeatures } from "@/lib/loadFeatures";

export default function websites({ feat }) {
  return (
    <Layout title={"Websites"}>
      <WebProductHero />
      <div className="bg-white py-16">
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32 text-center">
            <div className="flex flex-col mb-[65px] justify-center">
              <h2 className="text-3xl font-bold">
                What features do we provide?
              </h2>
              <div className="mt-[-4px]">
                <span className="inline-block w-[80px] h-[3px] bg-emerald-600" />
              </div>
            </div>
            <div className="grid gap-x-6 gap-y-16 md:grid-cols-3 lg:gap-x-12">
              {feat.map((f) => (
                <div className="flex flex-col" key={f.title}>
                  <h2 className="text-xl font-bold mb-4">{f.title}</h2>
                  <p className="text-gray-700">{f.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-32 text-center">
            <div className="flex flex-col mb-[65px] justify-center">
              <h2 className="text-3xl font-bold">Discover our Products</h2>
              <div className="mt-[-4px]">
                <span className="inline-block w-[80px] h-[3px] bg-emerald-600" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const feat = await loadFeatures();
  return {
    props: { feat },
  };
}
