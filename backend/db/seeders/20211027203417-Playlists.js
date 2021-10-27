'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Playlists', [
      {name: 'Haikyu', userId: 1},
      {name: 'Hype', userId: 1},
      {name: 'Pokemon', userId: 1},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Playlists', null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
