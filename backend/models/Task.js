import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        text: { type: String, required: true },
        date: { type: String, required: true },
        icon: { type: String, required: true },
        description: {type: mongoose.Schema.Types.ObjectId, ref: 'TaskDescription'}
    });
export default mongoose.model('Task', taskSchema);