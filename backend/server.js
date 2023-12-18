import express from 'express';
import mongoose, { Schema } from 'mongoose';
import cors from 'cors';

const app = express();
const port = 5050;

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://admin:admin@cluster0.8yqyuwo.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const taskSchema = new mongoose.Schema(
    {
        text: String,
        date: String,
        icon: String
    }
);
const Task = mongoose.model('Task', taskSchema);


const courseSchema = new mongoose.Schema({
    teacher: String,
    groupName: String,
    bg: String,
    bgPosition: String,
    color: String,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});


// Define a simple model

const Course = mongoose.model('Course', courseSchema);
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
        // Find the course by ID and populate the 'tasks' field
        const course = await Course.findById(courseId).populate('tasks').exec();

        if (!course) {
            return res.status(404).json({message: 'Course not found'});
        }

        // Display the course details with populated tasks
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
app.post('/api/courses/:id/tasks', async (req, res) => {
    const courseId = req.params.id;
    const taskDetails = req.body;

    try {
        console.log('Received taskDetails:', taskDetails);
        // Check if the course exists
        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({message: 'Course not found'});
        }

        // Create a new task
        const newTask = new Task(taskDetails);
        await newTask.save();

        // Add the task to the course's tasks array
        course.tasks.push(newTask._id);
        await course.save();

        res.json({course, newTask});
    } catch (error) {
        console.error('Error adding task to course:', error.message);
        res.status(500).json({message: 'Internal server error', error: error.message });
    }
});
app.get('/api/courses/:id/tasks', async(req,res) => {
    const courseId = req.params.id;
    try {
        // Find the course by ID and populate the 'tasks' field
        const course = await Course.findById(courseId).populate('tasks').exec();

        if (!course) {
            return res.status(404).json({message: 'Course not found'});
        }

        // Extract tasks from the course and send the response
        const tasks = course.tasks;
        res.json(tasks);
    } catch (error) {
        console.error('Error finding tasks for course:', error.message);
        res.status(500).json({message: 'Internal server error', error: error.message });
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
