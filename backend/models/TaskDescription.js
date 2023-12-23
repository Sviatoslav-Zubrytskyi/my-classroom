import mongoose from 'mongoose';

const taskDescriptionSchema = new mongoose.Schema(
    {
        descriptionText: String,
        author: String,
        privateComments: [String],
        publicComments: [String],
        attachedFiles: [String]
        // Add any additional fields you need for the task description
    });
export default mongoose.model('TaskDescription', taskDescriptionSchema);