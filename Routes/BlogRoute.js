import express from "express";
import { createBlog, deleteBlog, getBlogs, getBlogsById, updateBlog } from "../Controllers/BlogController.js";

const router = express.Router();

router.post("/create", createBlog);

router.get("/view", getBlogs);

router.get("/view/:id", getBlogsById);

router.put("/update/:id", updateBlog);

router.delete("/delete/:id", deleteBlog);

export default router;