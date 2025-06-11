const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

// GET all posts
router.get('/', post.controller.getAllPosts);

// GET post by ID
router.get('/:id', post.controller.getPostById);

// POST create new post
router.post('/', post.controller.createPost);

// PUT update post
router.put('/:id', post.controller.updatePost);

// DELETE post
router.delete('/:id', post.controller.deletePost);

// GET posts by category
router.get('/category/:category', post.controller.getPostsByCategory);

module.exports = router;