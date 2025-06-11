const express = require('express');
const router = express.Router();
const author = require('../controllers/author.controller');

// GET all authors
router.get('/', author.controller.getAllAuthors);

// GET author by ID
router.get('/:id', author.controller.getAuthorById);

// POST create new author
router.post('/', author.controller.createAuthor);

// PUT update author
router.put('/:id', author.controller.updateAuthor);

// DELETE author
router.delete('/:id', author.controller.deleteAuthor);

// GET posts by author
router.get('/:id/posts', author.controller.getPostsByAuthor);

module.exports = router;