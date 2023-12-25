import {Router} from "express";
import {
    getTasks,
    getTaskAndItsDescriptionByTaskId,
    postTask,
    deleteTask
} from "../controllers/taskController.js";


const router = new Router();

router.get('/:courseId/tasks', getTasks);
router.get('/:courseId/tasks/:taskId', getTaskAndItsDescriptionByTaskId);
router.post('/:courseId/tasks', postTask);
router.delete('/:courseId/tasks/:taskId', deleteTask);

export default router;