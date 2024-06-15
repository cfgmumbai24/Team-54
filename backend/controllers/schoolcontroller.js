const School = require("../models/donorModel.js");
const Student = require("../models/student.js");


module.exports.getStudents = async(req,res)=>{
    let {sname} = req.params;
    let data = await Student.find({school : sname});
    if(!data){
        return res.status(500).json({
            success:false,
            message:"Server error"
        });
    }
    return res.status(200).json({
        success:true,
        data,
    });

}
module.exports.getStudent = async(req,res)=>{
    let { id } = req.params;
    let data = await Student.findById(id);
    if(!data){
        res.status(500).json({
           success:false,
           message:"Server error",
        });
    }
    return res.status(200).json({
        success:true,
        data
    });
}