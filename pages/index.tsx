import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Testimoni from "../components/Testimoni";
import Database from "@/utils/Database";
import Testimonials from "@/models/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ testi }) {
  return (
    <Layout title={"Home"}>
      <Hero />
      <Testimoni testi={testi} />
    </Layout>
  );
}

export async function getServerSideProps() {
  await Database.connect();
  const testi = await Testimonials.find().lean();
  return {
    props: {
      testi: testi.map(Database.convertDocToObj),
    },
  };
}
