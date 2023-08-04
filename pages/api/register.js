import User from "../../models/user";
import dbconnect from "../../config/dbconnect";

export default async function register(req, res) {
  if (req.method === "POST") {
    dbconnect();

    const { name, email, password, userRole } = req.body;
    const user = await User.create({ name, email, password, userRole });
    res.status(201).json({ user });
  }
}
