'use strict';
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('Media', {
    name: DataTypes.STRING,
    bannerURL: DataTypes.STRING,
    infoLink: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Media.associate = function(models) {
    Media.hasMany(models.Album, { foreignKey: 'mediumId' });
    Media.hasMany(models.Track, { foreignKey: 'mediumId' });
  };
  return Media;
};
