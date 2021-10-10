'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    albumImageURL: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
    mediumId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.Media, { foreignKey: 'mediumId' });
    Album.belongsTo(models.Artist, { foreignKey: 'artistId' });
    Album.hasMany(models.Track, { foreignKey: 'albumId' });
  };
  return Album;
};
