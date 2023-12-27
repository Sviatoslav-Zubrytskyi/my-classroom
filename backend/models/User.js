import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fName:  { type: String, required: true },
    lName: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});

export default mongoose.model('User', userSchema);