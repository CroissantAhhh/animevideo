'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Playlist.associate = function(models) {
    Playlist.belongsTo(models.User, { as: "user", foreignKey: "userId" });
  };
  return Playlist;
};
