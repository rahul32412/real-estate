import { Schema, model } from "mongoose";
const property_schema = new Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  area: { type: String, required: true },
  bhk: {
    beds: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    kitchens: { type: Number, required: true },
  },
  images: {
    type: Array,
    validate: [
      (val) => val.length > 1,
      "At least two images should be provided",
    ],
  },
});
export default model("property", property_schema);
