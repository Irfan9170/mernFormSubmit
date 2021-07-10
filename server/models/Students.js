import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name:String,
    city : String,
    mobile:Number
})

const Student = mongoose.model('Student',studentSchema);

export default Student;