import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 5050;

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://admin:admin@cluster0.8yqyuwo.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// Define a simple model
const courseSchema = new mongoose.Schema({
    teacher: String,
    groupName: String,
    bg: String,
    bgPosition: String,
    color: String,
    tasks: [
        {
            text: String,
            date: String,
            icon: String
        }
    ]

});

const Course = mongoose.model('Course', courseSchema);

// Routes
app.get('/api/courses', async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

app.post('/api/courses', async (req, res) => {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.json(newCourse);
});

app.delete('/api/courses/:id', async (req, res) => {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.json({ message: 'Course deleted' });
});


app.listen(port, () => {

    console.log(`app is running pn port ${port}`);

})
