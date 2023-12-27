import {Router} from 'express'
import {
    register,
    login,
    getUser
} from "../controllers/authController.js";
import {checkAuth} from "../middleware/checkAuth.js";

const router = new Router()

router.post('/register', register);
router.post('/login', login);
router.get('/user', checkAuth, getUser);

export default router