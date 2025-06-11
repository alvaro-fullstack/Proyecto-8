const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// GET all authors
router.get('/', authorController.getAllAuthors);

// GET author by ID
router.get('/:id', authorController.getAuthorById);

// POST create new author
router.post('/', authorController.createAuthor);

// PUT update author
router.put('/:id', authorController.updateAuthor);

// DELETE author
router.delete('/:id', authorController.deleteAuthor);

// GET posts by author
router.get('/:id/posts', authorController.getPostsByAuthor);

module.exports = router;