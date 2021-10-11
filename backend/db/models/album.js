'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    albumImageURL: DataTypes.STRING,
    artist: DataTypes.STRING,
    mediumId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.Media, { as: "medium", foreignKey: 'mediumId' });
    Album.hasMany(models.Track, { as: "tracks", foreignKey: 'albumId' });
  };
  return Album;
};
