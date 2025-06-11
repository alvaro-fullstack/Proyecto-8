const Post = require('../models/postModel');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.getById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, description, category, author_id } = req.body;
    if (!title || !description || !category || !author_id) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const newPost = await Post.create({ title, description, category, author_id });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { title, description, category, author_id } = req.body;
    if (!title || !description || !category || !author_id) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const updatedPost = await Post.update(req.params.id, { title, description, category, author_id });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPostsByCategory = async (req, res) => {
  try {
    const posts = await Post.getByCategory(req.params.category);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};