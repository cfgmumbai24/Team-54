const Schools = require("../models/donorModel.js");
const Students = require("../models/student.js")

const getSchoolsNGO = async (req, res) => {
  try {
    const school = await Schools.find({}).sort({ createdAt: -1 });
    res.status(200).json(school);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSchoolNGO = async (req, res) => {
  const { id } = req.params;
  const school = await Schools.findById(id);
  if (!school) {
    return res.status(404).json({ error: "No such school" });
  }

  res.status(200).json(school);
};

module.exports = {
   getSchoolNGO,
   getSchoolsNGO
}