import mongoose from "mongoose";

const rolesSchema = new mongoose.Schema({
  userroles: {
    type: String,
  },
});

export default mongoose.models.Roles || mongoose.model("Roles", rolesSchema);
