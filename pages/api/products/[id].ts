import WebProductss from "@/models/WebProducts";
import Database from "@/utils/Database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await Database.connect();
  const WebProduct = await WebProductss.findById(req.query.id);
  await Database.disconnect();
  res.send(WebProduct);
}
