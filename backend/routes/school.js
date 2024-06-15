const express = require("express");
const router = express.Router();

const {getStudents, getStudent} = require("../controllers/schoolcontroller.js");
const {eval} = require("../controllers/eval.js");

router.get("/getStudents/:sname", getStudents);
router.get("/getStudent/:id", getStudent);
router.post("/eval/:sid", eval);

module.exports = router;