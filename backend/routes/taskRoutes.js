import {Router} from "express";
import {
    getTasks,
    getTaskAndItsDescriptionByTaskId,
    postTask,
    deleteTask
} from "../controllers/taskController.js";


const router = new Router();

router.get('/:courseId', getTasks);
router.get('/:courseId/:taskId', getTaskAndItsDescriptionByTaskId);
router.post('/:courseId', postTask);
router.delete('/:courseId/:taskId', deleteTask);

export default router;