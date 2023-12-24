import {Router} from "express";
import {
    getAllCourses,
    getCourseById,
    postCourse,
    deleteCourse
} from "../controllers/courseController.js";

const router = new Router();

router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.post('/', postCourse);
router.delete('/:id', deleteCourse);



export default router;