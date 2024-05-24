const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:sundar@localhost:3306/apigateways');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

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

User.hasMany(Post);
Post.belongsTo(User);

module.exports = { User, Post, sequelize };
