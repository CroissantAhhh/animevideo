'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    fileURL: DataTypes.STRING,
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    mediumId: DataTypes.INTEGER,
    trackImageURL: DataTypes.STRING
  }, {});
  Track.associate = function(models) {
    Track.belongsTo(models.User, { as: "user", foreignKey: 'userId' });
    Track.belongsTo(models.Media, { as: "medium", foreignKey: 'mediumId' });
    Track.belongsTo(models.Album, { as: "album", foreignKey: 'albumId' });
    Track.hasMany(models.Comment, { as: "comments", foreignKey: 'trackId' });
    Track.hasMany(models.PlaylistLink, { as: "playlistLinks", foreignKey: 'trackId'});
  };
  return Track;
};
