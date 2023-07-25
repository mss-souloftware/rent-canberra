import mongoose from "mongoose";

export default function dbconnect() {
  if (mongoose.connection.readyState >= 1) return;

  mongoose.connect(process.env.DB_URI);
}
