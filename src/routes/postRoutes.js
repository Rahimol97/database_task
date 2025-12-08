import { Router } from "express";

import { createPost, getPost,updatePost,deletePost } from "../controllers/postController.js";

const router = Router();
router.post('/addPosts', createPost);
router.get('/getPosts', getPost);
router.put('/:id', updatePost);
router.delete('/delPosts/:id', deletePost);
 
export default router;