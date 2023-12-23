import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        text: String,
        date: String,
        icon: String,
        description: {type: mongoose.Schema.Types.ObjectId, ref: 'TaskDescription'}
    });
export default mongoose.model('Task', taskSchema);