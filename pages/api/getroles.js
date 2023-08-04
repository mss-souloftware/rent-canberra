import roles from "../../models/roles";
import dbconnect from "../../config/dbconnect";

export default async function role(req, res) {
  if (req.method === "GET") {
    dbconnect();

    const role = await roles.find({});
    res.status(201).json({ role });
  }
}
