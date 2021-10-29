'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Playlists', [
      {name: 'Your Songs', userId: 1},
      {name: 'Haikyu', userId: 1},
      {name: 'Hype', userId: 1},
      {name: 'Pokemon', userId: 1},
      {name: 'Your Songs', userId: 2},
      {name: 'Your Songs', userId: 3},
      {name: 'Your Songs', userId: 4},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Playlists', null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
