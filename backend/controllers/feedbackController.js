import feedbackModel from "../models/feedbackModel.js"; // Corrected filename

const feedback = async (req, res) => {
    try {
        const fb = new feedbackModel({
            name: req.body.name,
            email: req.body.email,
            feedback: req.body.feedback
        });

        await fb.save();
        res.status(201).json({ success: true, message: "Feedback Sent" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error: " + error.message });
    }
};

export default feedback;
