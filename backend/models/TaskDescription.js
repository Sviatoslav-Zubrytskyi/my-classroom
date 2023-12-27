import mongoose from "mongoose";

const taskDescriptionSchema = new mongoose.Schema(
    {
        descriptionText: { type: String, required: true },
        author: { type: String, required: true },
        privateComments: [String],
        publicComments: [String],
        attachedFiles: [String]
        // Add any additional fields you need for the task description
    });
export default mongoose.model('TaskDescription', taskDescriptionSchema);