import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
    {
        teacher: String,
        groupName: String,
        bg: String,
        bgPosition: String,
        color: String,
        tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
    });
export default mongoose.model('Course', courseSchema);