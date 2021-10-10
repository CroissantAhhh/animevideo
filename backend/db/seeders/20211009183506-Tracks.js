'use strict';
const hs1v1 = require('../../utils/haikyuData/haikyuS1V1.js');
const hs1v2 = require('../../utils/haikyuData/haikyuS1V2.js');
const hs2v1 = require('../../utils/haikyuData/haikyuS2V1.js');
const hs2v2 = require('../../utils/haikyuData/haikyuS2V2.js');
const mh1 = require('../../utils/myheroData/myheroS1.js');
const mh2 = require('../../utils/myheroData/myheroS2.js');
const fe3h = require('../../utils/feData.js');
const dgrn = require('../../utils/danganData.js');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Tracks', [
      ...hs1v1,
      ...hs1v2,
      ...hs2v1,
      ...hs2v2,
      ...mh1,
      ...mh2,
      ...fe3h,
      ...dgrn,
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tracks', null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
