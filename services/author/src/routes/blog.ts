import express from 'express';
import { isAuth } from '../middleware/isAuth.js';
import uploadFile from '../middleware/multer.js';
import { aiBlogResponse, aiDescriptionResponse, aiTitleResponse, createBlog, deleteBlog, UpdateBlog } from '../controllers/blog.js';

const router=express();

router.post("/blog/new",isAuth,uploadFile, createBlog);
router.post("/blog/:id",isAuth,uploadFile,UpdateBlog);
router.delete("/blog/:id",isAuth,uploadFile,deleteBlog);
router.post("/ai/title", aiTitleResponse);
router.post("/ai/descripiton", aiDescriptionResponse);
router.post("/ai/blog", aiBlogResponse);

export default router;