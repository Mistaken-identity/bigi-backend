import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/Orders.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log(' MongoDB connected'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => { 
    res.send('Hello Teflon, Bigi backend is running 🚀'); 
});

app.use('/auth', authRoutes);
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});