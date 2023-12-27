import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        teacher: { type: String, required: true },
        groupName: { type: String, required: true },
        bg: { type: String, required: true },
        bgPosition: { type: String, required: true },
        color: { type: String, required: true },
        tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}],
        teachers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
    });
export default mongoose.model('Course', courseSchema);