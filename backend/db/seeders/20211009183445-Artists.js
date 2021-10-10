'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Artists', [
        { name: "Yuki Hayashi" },
        { name: "Takeru Kanazaki"},
        { name: "Masafumi Takada"}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artists', null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
