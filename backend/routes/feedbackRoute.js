import express from 'express';
import feedback from '../controllers/feedbackController.js';

const feedbackRouter = express.Router();

feedbackRouter.post("/feedback", feedback);

export default feedbackRouter;
