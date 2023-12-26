import {Router} from "express";
import {
    getAllCourses,
    getCourseById,
    postCourse,
    deleteCourse
} from "../controllers/courseController.js";
import {checkAuth} from "../middleware/checkAuth.js";

const router = new Router();

router.get('/', getAllCourses);
router.get('/:courseId', getCourseById);
router.post('/', checkAuth, postCourse);
router.delete('/:courseId', deleteCourse);



export default router;