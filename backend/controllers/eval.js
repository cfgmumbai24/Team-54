const Student = require("../models/student");

module.exports.eval = async (req, res) => {
    const { sid } = req.params;
    const { newLevel } = req.body;  // Assuming the new level data is sent in the request body as `newLevel`

    // Validate newLevel
    if (newLevel === undefined || typeof newLevel !== 'number') {
        return res.status(400).json({
            success: false,
            message: "newLevel must be a number and provided in the request body"
        });
    }

    try {
        // Find the student by ID
        const student = await Student.findById(sid);

        // If no student found, send a 404 response
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }
        console.log(student);
        // Append the new level with the current date
        
        let levels = [...student.level, {valuesss:newLevel, date: new Date()}];
        
        student.level = levels;

        // Save the updated student document
        const result = await student.save();

        // Send a success response with the updated student data
        return res.status(200).json({
            success: true,
            message: "New level added successfully",
            data: result  // Return the result after saving
        });
    } catch (error) {
        // Handle any errors during the update process
        console.error("Error updating student level:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while updating the student's level",
            error: error.message
        });
    }
};
