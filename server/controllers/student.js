import Student from '../models/Students.js'
export const getStudent = async (req,res)=>{
    try{
        const students = await Student.find();
         res.status(200).json(students)

    } 
    catch (err){
        res.status(400).json({
            message:"failed",
            data : err.message
        })
    }
    
}

export const createStudent = async (req,res)=>{
    const student = req.body;
    const newstudent = new Student(student);
    try {
        await newstudent.save();
        
        res.status(201).json(newstudent);
    } catch (error) {
        console.log(error.message)
    }
   
}

export const deleteStudent = async (req,res)=>{
    console.log(req.params)
}