import { WebProductFeatures } from "@/interfaces/IProduct";
import features from "@/utils/WebFeatures";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WebProductFeatures[]>
) {
  res.status(200).json(features);
}
