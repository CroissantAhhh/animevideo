'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [{
      body: "Talent is something you make bloom, instinct is something you polish!",
      userId: 1,
      trackId: 96,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
