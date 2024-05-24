const { Post } = require('../models');

exports.createPost = async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
};
