const jwt = require("jsonwebtoken");
const NGO = require("../models/NGOModel");

const requireNGOAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization)
  if (!authorization || !authorization.startsWith("Bearer")) {
    return res.status(401).json({ error: "NGO Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.ngo = await NGO.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireNGOAuth;