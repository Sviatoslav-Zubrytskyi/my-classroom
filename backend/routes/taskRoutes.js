import {Router} from "express";
import {
    getTasks,
    getTaskAndItsDescriptionByTaskId,
    postTask,
    deleteTask
} from "../controllers/taskController.js";
import {checkAuth} from "../middleware/checkAuth.js";


const router = new Router();

router.get('/:courseId', getTasks);
router.get('/:courseId/:taskId', getTaskAndItsDescriptionByTaskId);
router.post('/:courseId', checkAuth, postTask);
router.delete('/:courseId/:taskId', checkAuth, deleteTask);

export default router;