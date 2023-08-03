import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  userId: String,
});

export default mongoose.models.Listing || mongoose.model("Listing", listingSchema);
