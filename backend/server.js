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
    // tasks: [{task: Schema.ObjectId, ref: 'Task'}]

});

// const taskSchema = new mongoose.Schema(
//     {
//         text: String,
//         date: String,
//         icon: String
//     }
// );

const Course = mongoose.model('Course', courseSchema);
//const Task = mongoose.model('Task', taskSchema);
// Routes
app.get('/api/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Internal server error'});
    }
});
app.get('/api/courses/:id', async (req, res) => {
    const courseId = req.params.id;
    try {
        // Find the course by ID
        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({message: 'Course not found'});
        }

        // Display the course details
        res.json(course);
    } catch (error) {
        console.error('Error finding course:', error.message);
        res.status(500).json({message: 'Internal server error'});
    }
});
app.post('/api/courses', async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.json(newCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
});


app.delete('/api/courses/:id', async (req, res) => {
    try {
        const {id} = req.params;
        await Course.findByIdAndDelete(id);
        res.json({message: 'Course deleted'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
});


app.listen(port, () => {

    console.log(`app is running pn port ${port}`);

})
