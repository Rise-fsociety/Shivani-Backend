import {Router} from 'express';
import { loginUser, logOut, registerUser } from '../controllers/user.controllers.js';

const router = Router();

router.post('/register', registerUser)
router.route('/login').post(loginUser)
router.route('/logOut').post(logOut)

export default router;