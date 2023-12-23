import Task from '../models/TaskDescription.js';
import TaskDescription from "../models/TaskDescription.js";
import Course from "../models/Course.js";

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Internal server error'});
    }
}