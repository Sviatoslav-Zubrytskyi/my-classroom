import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import courseRoutes from "./routes/courseRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
dotenv.config();
const {PORT, DB_USER, DB_PASSWORD, DB_NAME, DB_ID} = process.env

app.use(cors());
app.use(express.json());

app.use('/api/courses', courseRoutes);
app.use('/api/courses', taskRoutes);
const start = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.${DB_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)

        app.listen(PORT, () => {
            console.log('Server start port ' + PORT);
        })
    } catch (err) {
        console.error(err)
    }
}
start();