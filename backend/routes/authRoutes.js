import {Router} from 'express'
import {
    register,
    login
} from "../controllers/authController.js";
import {checkAuth} from "../middleware/checkAuth.js";

const router = new Router()

router.post('/register', register);
router.post('/login', login);


export default router