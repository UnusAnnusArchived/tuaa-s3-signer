import { NextApiHandler } from "next";

const homeRedirect: NextApiHandler = (req, res) => {
  res.redirect("https://unusann.us");
};

export default homeRedirect;
