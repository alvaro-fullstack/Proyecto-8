const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// GET all posts
router.get('/', postController.getAllPosts);

// GET post by ID
router.get('/:id', postController.getPostById);

// POST create new post
router.post('/', postController.createPost);

// PUT update post
router.put('/:id', postController.updatePost);

// DELETE post
router.delete('/:id', postController.deletePost);

// GET posts by category
router.get('/category/:category', postController.getPostsByCategory);

module.exports = router;