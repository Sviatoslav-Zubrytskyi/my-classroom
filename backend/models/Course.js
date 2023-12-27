import mongoose from "mongoose";
import { nanoid } from "nanoid";

const courseSchema = new mongoose.Schema(
    {
        _id: { type: String, default: () => nanoid(5)},
        teacher: { type: String, required: true },
        groupName: { type: String, required: true },
        bg: { type: String, required: true },
        bgPosition: { type: String, required: true },
        color: { type: String, required: true },
        tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}],
        teachers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
    });
export default mongoose.model('Course', courseSchema);