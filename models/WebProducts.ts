import { WebProduct } from "@/interfaces/IProduct";
import mongoose from "mongoose";

const WebProductSchema = new mongoose.Schema<WebProduct>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  price: { type: Number, required: true },
  progLang: { type: String, required: true },
  prodType: { type: String, required: true },
  description: { type: String, required: true },
});

const WebProductss =
  mongoose.models.WebProducts ||
  mongoose.model<WebProduct>("WebProducts", WebProductSchema);

export default WebProductss;
