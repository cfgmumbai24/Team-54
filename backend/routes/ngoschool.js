const express = require("express");
const router = express.Router();

const {getSchoolsNGO, getSchoolNGO} = require("../controllers/Ngoocontroller.js");

router.get("/getSchoolsNGO", getSchoolsNGO);
router.get("/getSchoolNGO/:id", getSchoolNGO);

module.exports = router;