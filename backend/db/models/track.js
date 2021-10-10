'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    fileURL: DataTypes.STRING,
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    mediumId: DataTypes.INTEGER,
    trackImageURL: DataTypes.STRING
  }, {});
  Track.associate = function(models) {
    Track.belongsTo(models.User, { as: "user", foreignKey: 'userId' });
    Track.belongsTo(models.Media, { as: "medium", foreignKey: 'mediumId' });
    Track.belongsTo(models.Album, { as: "album", foreignKey: 'albumId' });
    Track.belongsTo(models.Artist, { as: "artist", foreignKey: 'artistId' });
    Track.hasMany(models.Comment, { as: "comments", foreignKey: 'trackId '});
  };
  return Track;
};
