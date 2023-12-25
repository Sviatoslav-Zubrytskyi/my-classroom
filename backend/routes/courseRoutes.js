import {Router} from "express";
import {
    getAllCourses,
    getCourseById,
    postCourse,
    deleteCourse
} from "../controllers/courseController.js";

const router = new Router();

router.get('/', getAllCourses);
router.get('/:courseId', getCourseById);
router.post('/', postCourse);
router.delete('/:courseId', deleteCourse);



export default router;