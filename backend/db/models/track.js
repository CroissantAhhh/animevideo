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
    Track.belongsTo(models.User, { foreignKey: 'userId' });
    Track.belongsTo(models.Media, { foreignKey: 'mediumId' });
    Track.belongsTo(models.Album, { foreignKey: 'albumId' });
    Track.belongsTo(models.Artist, { foreignKey: 'artistId' });
    Track.hasMany(models.Comment, { foreignKey: 'trackId '});
  };
  return Track;
};