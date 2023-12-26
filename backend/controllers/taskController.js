import Task from '../models/Task.js';
import TaskDescription from "../models/TaskDescription.js";
import Course from "../models/Course.js";
import User from "../models/User.js";

export const getTasks = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const course = await Course.findById(courseId).populate('tasks').exec();
        console.log('Received courseId:', courseId);

        res.json(course.tasks);
    } catch (error) {
        console.error('Error finding tasks for course:', error.message);
        res.status(500).json({message: 'Internal server error', error: error.message});
    }
}
export const getTaskAndItsDescriptionByTaskId = async (req, res) => {
    try {
        const {taskId} = req.params;
        console.log(`Received taskId: ${taskId}`)
        // Find the task by ID and populate the 'description' field
        const task = await Task.findById(taskId).populate('description').exec();

        if (!task) {
            return res.status(404).json({message: 'Task not found'});
        }

        // Display the task details with populated description
        res.json(task);
    } catch (error) {
        console.error('Error finding course:', error.message);
        res.status(500).json({message: 'Internal server error'});
    }
}
export const postTask = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        console.log('Received courseId:', courseId);
        const {
            text, date, icon,
            descriptionText, author, attachedFiles, privateComments, publicComments
        } = req.body;

        // Check if the course exists
        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({message: 'Course not found'});
        }

        // Create a new task description
        const newTaskDescription = await TaskDescription.create({
            descriptionText, author, attachedFiles,
            privateComments, publicComments
        });
        console.log(newTaskDescription._id);
        // Create a new task
        const newTask = await Task.create({
            text, date, icon, description: newTaskDescription._id
        });


        // Add the task to the course's tasks array
        course.tasks.push(newTask._id);
        await course.save();

        res.json({course, newTask});
    } catch (error) {
        console.error('Error adding task to course:', error.message);
        res.status(500).json({message: 'Internal server error', error: error.message});
    }
}

export const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.taskId;
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
}