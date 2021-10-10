'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    trackId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, { as: "user", foreignKey: 'userId' });
    Comment.belongsTo(models.Track, { as: "track", foreignKey: 'trackId' });
  };
  return Comment;
};
