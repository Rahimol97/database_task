import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import postRoutes from './src/routes/postRoutes.js';

dotenv.config();
const app = express();
connectDB();
app.use(express.json());


app.use('/api/posts', postRoutes);
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})
