import Router from 'express';
import { createPost, deletePost, getPost, uptadePost } from '../controllers/post.controller.js';

const router = Router();

router.post('/create', createPost)
router.get('/get', getPost)
router.patch('/uptade/:id', uptadePost)
router.delete('/delete/:id', deletePost)

export default router
