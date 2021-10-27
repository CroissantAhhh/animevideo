'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlaylistLink = sequelize.define('PlaylistLink', {
    playlistId: DataTypes.INTEGER,
    trackId: DataTypes.INTEGER
  }, {});
  PlaylistLink.associate = function(models) {
    PlaylistLink.belongsTo(models.Playlist, { as: "playlist", foreignKey: "playlistId"});
    PlaylistLink.belongsTo(models.Track, { as: "track", foreignKey: "trackId" });
  };
  return PlaylistLink;
};
