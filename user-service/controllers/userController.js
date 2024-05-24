const { User, Profile } = require('../models');

exports.createUser = async (req, res) => {
  const user = await User.create(req.body, { include: Profile });
  res.json(user);
};