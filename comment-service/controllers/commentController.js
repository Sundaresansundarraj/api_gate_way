const { Comment } = require('../models');

exports.createComment = async (req, res) => {
  const comment = await Comment.create(req.body);
  res.json(comment);
};
