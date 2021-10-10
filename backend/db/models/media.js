'use strict';
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('Media', {
    name: DataTypes.STRING,
    bannerURL: DataTypes.STRING,
    infoLink: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Media.associate = function(models) {
    Media.hasMany(models.Album, { as: "albums", foreignKey: 'mediumId' });
    Media.hasMany(models.Track, { as: "tracks", foreignKey: 'mediumId' });
  };
  return Media;
};
