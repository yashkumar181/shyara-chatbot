import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { handleChat } from './controllers/chat.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// The single API route the frontend talks to
app.post('/api/chat', handleChat);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Shyara Chatbot API running on port ${PORT}`);
});