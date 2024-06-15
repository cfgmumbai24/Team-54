const Donor = require("../models/donorModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const signupDonor = async (req, res) => {
  const { name, password } = req.body;

  try {
    const donor = await Donor.signup(name, password);
    const token = createToken(donor._id);
    res.status(200).json({ name, password, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginDonor = async (req, res) => {
  const { name, password } = req.body;

  try {
    const donor = await Donor.login(name, password);
    const token = createToken(donor._id);
    res.status(200).json({ name, password, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupDonor, loginDonor };
