import roles from "../../models/roles";
import dbconnect from "../../config/dbconnect";

export default async function role(req, res) {
  if (req.method === "POST") {
    dbconnect();

    const { userroles } = req.body;
    if (userroles == "admin") {
      const role = await roles.create({ userroles });
      res.status(201).json({ role });
    }
    res.status(404).json({ message: 'error' });
  }
}
