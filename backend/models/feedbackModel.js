import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    feedback: { type: String, required: true },
})

const feedbackModel = mongoose.models.feedback || mongoose.model("feedback", feedbackSchema);
export default feedbackModel;