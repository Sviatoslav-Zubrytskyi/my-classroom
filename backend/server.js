import express from 'express';
import mongoose, {Schema} from 'mongoose';
import cors from 'cors';

const app = express();
const port = 5050;

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://admin:admin@cluster0.8yqyuwo.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const taskDescriptionSchema = new mongoose.Schema({
    descriptionText: String,
    author: String,
    privateComments: [String],
    publicComments: [String],
    attachedFiles: [String]
    // Add any additional fields you need for the task description
});

const TaskDescription = mongoose.model('TaskDescription', taskDescriptionSchema);

const taskSchema = new mongoose.Schema(
    {
        text: String,
        date: String,
        icon: String,
        description: {type: mongoose.Schema.Types.ObjectId, ref: 'TaskDescription'}
    }
);
const Task = mongoose.model('Task', taskSchema);


const courseSchema = new mongoose.Schema({
    teacher: String,
    groupName: String,
    bg: String,
    bgPosition: String,
    color: String,
    tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
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

    try {
        const courseId = req.params.id;
        const {
            text, date, icon,
            descriptionText, author, attachedFiles, privateComments, publicComments
        } = req.body;
        // console.log('Received taskDetails:', taskDetails);
        // Check if the course exists
        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({message: 'Course not found'});
        }
        // Create a new task description
        const newTaskDescription = new TaskDescription({
            descriptionText, author, attachedFiles,
            privateComments, publicComments
        });
        await newTaskDescription.save();

        // Create a new task
        const newTask = new Task({text, date, icon, description: newTaskDescription._id});
        await newTask.save();

        // Add the task to the course's tasks array
        course.tasks.push(newTask._id);
        await course.save();

        res.json({course, newTask});
    } catch (error) {
        console.error('Error adding task to course:', error.message);
        res.status(500).json({message: 'Internal server error', error: error.message});
    }
});
app.get('/api/courses/:id/tasks', async (req, res) => {
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
        res.status(500).json({message: 'Internal server error', error: error.message});
    }
});
app.get('/api/tasks/:taskId/description', async (req, res) => {
    try {
        const taskId = req.params.taskId;

        // Find the task description by task ID
        const taskDescription = await TaskDescription.findOne({task: taskId});

        if (!taskDescription) {
            return res.status(404).json({message: 'Task description not found'});
        }

        // Return the task description
        res.json(taskDescription);
    } catch (error) {
        console.error('Error finding task description:', error.message);
        res.status(500).json({message: 'Internal server error'});
    }
});

app.delete('/api/tasks/:id', async (req, res) => {

    try {
        const taskId = req.params.id;
        // Find the task by ID and remove it
        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).json({message: 'Task not found'});
        }
        await TaskDescription.findByIdAndDelete(deletedTask.description);

        // Remove the task reference from all associated courses
        await Course.updateMany({tasks: taskId}, {$pull: {tasks: taskId}});

        res.json({message: 'Task deleted', deletedTask});
    } catch (error) {
        console.error('Error deleting task:', error.message);
        res.status(500).json({message: 'Internal server error', error: error.message});
    }
});


app.delete('/api/courses/:id', async (req, res) => {
    try {
        const {id} = req.params;

        // Find the course to get the associated tasks and task descriptions
        const course = await Course.findById(id);

        if (!course) {
            return res.status(404).json({message: 'Course not found'});
        }

        // Get the array of task IDs from the course
        const taskIds = course.tasks;

        // Delete tasks and their associated task descriptions
        await Promise.all(taskIds.map(async (taskId) => {
            // Find the task to get the associated task description
            const task = await Task.findById(taskId);
            if (task) {
                const taskDescriptionId = task.description;

                // Delete the task description
                await TaskDescription.findByIdAndDelete(taskDescriptionId);
            }

            // Delete the task
            await Task.findByIdAndDelete(taskId);
        }));

        // Delete the course
        await Course.findByIdAndDelete(id);

        res.json({message: 'Course, tasks, and related task descriptions deleted'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
});


app.listen(port, () => {

    console.log(`app is running pn port ${port}`);

})
