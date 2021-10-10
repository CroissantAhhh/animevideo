'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING
  }, {});
  Artist.associate = function(models) {
    Artist.hasMany(models.Album, { as: "albums", foreignKey: 'artistId'} );
    Artist.hasMany(models.Track, { as: "tracks", foreignKey: 'artistId'} );
  };
  return Artist;
};
