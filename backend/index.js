import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import courseRoutes from "./routes/courseRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
const port = 5050;
app.use(cors());
app.use(express.json());

app.use('/api/courses', courseRoutes);
app.use('/api/courses', taskRoutes);
const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.8yqyuwo.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(port, () => {
            console.log('Server start port ' + port)
        })
    } catch (err) {
        console.error(err)
    }
}
start();