const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:sundar@localhost:3306/apigateways');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = { Post, Comment, sequelize };
