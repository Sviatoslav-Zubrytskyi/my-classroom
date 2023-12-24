import Task from '../models/TaskDescription.js';
import TaskDescription from "../models/TaskDescription.js";
import Course from "../models/Course.js";

export const getTasks = async (req, res) => {
    try {
        const courseId = req.params.id;
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
}
export const postTask = async (req, res) => {
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
}

