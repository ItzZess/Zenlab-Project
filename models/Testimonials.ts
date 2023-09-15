import { TestimonialInterface } from "@/interfaces/IClient";
import mongoose from "mongoose";

const testimonialsSchema = new mongoose.Schema<TestimonialInterface>({
  username: { type: String, required: true },
  message: { type: String, required: true },
  role: { type: String, required: true },
  avatar: String,
});

const Testimonials =
  mongoose.models.Testimonial ||
  mongoose.model<TestimonialInterface>("Testimonial", testimonialsSchema);
export default Testimonials;
