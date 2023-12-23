import {Router} from "express";
import {
    getAllCourses
} from "../controllers/courseController.js";

const router = new Router();

router.get('/', getAllCourses);

export default router;