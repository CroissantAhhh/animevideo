'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PlaylistLinks', [
      {playlistId: 1, trackId: 33},
      {playlistId: 1, trackId: 50},
      {playlistId: 1, trackId: 51},
      {playlistId: 1, trackId: 55},
      {playlistId: 1, trackId: 64},
      {playlistId: 1, trackId: 66},
      {playlistId: 1, trackId: 68},
      {playlistId: 1, trackId: 78},
      {playlistId: 1, trackId: 79},
      {playlistId: 1, trackId: 85},
      {playlistId: 1, trackId: 93},
      {playlistId: 1, trackId: 96},
      {playlistId: 1, trackId: 100},
      {playlistId: 1, trackId: 101},
      {playlistId: 1, trackId: 113},
      {playlistId: 1, trackId: 124},
      {playlistId: 1, trackId: 132},
      {playlistId: 1, trackId: 137},
      {playlistId: 1, trackId: 154},
      {playlistId: 1, trackId: 167},
      {playlistId: 1, trackId: 168},
      {playlistId: 1, trackId: 170},
      {playlistId: 1, trackId: 171},
      {playlistId: 2, trackId: 173},
      {playlistId: 2, trackId: 107},
      {playlistId: 2, trackId: 33},
      {playlistId: 2, trackId: 50},
      {playlistId: 2, trackId: 55},
      {playlistId: 2, trackId: 64},
      {playlistId: 2, trackId: 93},
      {playlistId: 2, trackId: 96},
      {playlistId: 2, trackId: 101},
      {playlistId: 2, trackId: 124},
      {playlistId: 2, trackId: 101},
      {playlistId: 2, trackId: 168},
      {playlistId: 2, trackId: 171},
      {playlistId: 2, trackId: 101},
      {playlistId: 2, trackId: 247},
      {playlistId: 2, trackId: 259},
      {playlistId: 2, trackId: 280},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PlaylistLinks', null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
