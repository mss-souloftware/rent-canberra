import Listing from "../../models/addlisting";
import dbconnect from "../../config/dbconnect";

export default async function addlisting(req, res) {
  if (req.method === "POST") {
    dbconnect();

    const { title, description, price, location, userId } = req.body;
    const lisitng = await Listing.create({ title, description, price, location, userId });
    res.status(201).json({ lisitng });
  }
}
