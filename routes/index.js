const express = require('express');
const router = express.Router();
// User auth
const authenticateToken = require('../config/userAuth');

// Posts
const posts = [
   {
      username: 'Brad',
      title: 'Post 1'
   },
   {
      username: 'Jonh',
      title: 'Post 2'
   },
   {
      username: 'Elena',
      title: 'Post 3'
   },
]

// First route
router.get('/posts', authenticateToken, (req, res) => {
   res.json(posts.filter(post => post.username === req.user.name));
});

module.exports = router;