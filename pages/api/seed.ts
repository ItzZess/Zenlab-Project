import Testimonials from "@/models/Testimonials";
import Database from "@/utils/Database";
import data from "@/utils/Dataseed";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await Database.connect();
  await Testimonials.deleteMany();
  await Testimonials.insertMany(data.testimoni);
  await Database.disconnect();
  res.status(200).json(data.testimoni);
}
