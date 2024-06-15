const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: [{}],  // Array of level subdocuments
        default: [{ value: 0, date: Date.now }]
    },
    school: {
        type: String,
        required: true
    },
    class: {
        type: Number,
        required: true
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
