import Task from '../models/Task.js';
import TaskDescription from "../models/TaskDescription.js";
import Course from "../models/Course.js";
import User from "../models/User.js";

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Internal server error'});
    }
}
export const getCourseById = async (req, res) => {
    try {
        const {courseId} = req.params;
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
}
export const postCourse = async (req, res) => {
    try {
        console.log(`req body:${req.body}`);
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.json(newCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
}

export const deleteCourse = async (req, res) => {
    try {
        const {courseId} = req.params;

        // Find the course to get the associated tasks and task descriptions
        const course = await Course.findById(courseId);

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
        await Course.findByIdAndDelete(courseId);

        res.json({message: 'Course, tasks, and related task descriptions deleted'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
}