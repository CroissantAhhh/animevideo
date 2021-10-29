'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PlaylistLinks', [
      {playlistId: 2, trackId: 33},
      {playlistId: 2, trackId: 50},
      {playlistId: 2, trackId: 51},
      {playlistId: 2, trackId: 55},
      {playlistId: 2, trackId: 64},
      {playlistId: 2, trackId: 66},
      {playlistId: 2, trackId: 68},
      {playlistId: 2, trackId: 78},
      {playlistId: 2, trackId: 79},
      {playlistId: 2, trackId: 85},
      {playlistId: 2, trackId: 93},
      {playlistId: 2, trackId: 96},
      {playlistId: 2, trackId: 100},
      {playlistId: 2, trackId: 101},
      {playlistId: 2, trackId: 113},
      {playlistId: 2, trackId: 124},
      {playlistId: 2, trackId: 132},
      {playlistId: 2, trackId: 137},
      {playlistId: 2, trackId: 154},
      {playlistId: 2, trackId: 167},
      {playlistId: 2, trackId: 168},
      {playlistId: 2, trackId: 170},
      {playlistId: 2, trackId: 171},
      {playlistId: 3, trackId: 173},
      {playlistId: 3, trackId: 107},
      {playlistId: 3, trackId: 33},
      {playlistId: 3, trackId: 50},
      {playlistId: 3, trackId: 55},
      {playlistId: 3, trackId: 64},
      {playlistId: 3, trackId: 93},
      {playlistId: 3, trackId: 96},
      {playlistId: 3, trackId: 101},
      {playlistId: 3, trackId: 124},
      {playlistId: 3, trackId: 101},
      {playlistId: 3, trackId: 168},
      {playlistId: 3, trackId: 171},
      {playlistId: 3, trackId: 101},
      {playlistId: 3, trackId: 247},
      {playlistId: 3, trackId: 259},
      {playlistId: 3, trackId: 280},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PlaylistLinks', null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
