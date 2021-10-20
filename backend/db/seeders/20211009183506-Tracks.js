'use strict';
const hs1v1 = require('../../utils/trackData/haikyuData/haikyuS1V1.js');
const hs1v2 = require('../../utils/trackData/haikyuData/haikyuS1V2.js');
const hs2v1 = require('../../utils/trackData/haikyuData/haikyuS2V1.js');
const hs2v2 = require('../../utils/trackData/haikyuData/haikyuS2V2.js');
const hs3 = require('../../utils/trackData/haikyuData/haikyuS3.js');
const hs4 = require('../../utils/trackData/haikyuData/haikyuS4.js');
const mh1 = require('../../utils/trackData/myheroData/myheroS1.js');
const mh2 = require('../../utils/trackData/myheroData/myheroS2.js');
const fe3h = require('../../utils/trackData/feData.js');
const dgrn = require('../../utils/trackData/danganData.js');
const PW1 = require('../../utils/trackData/aaPWData/PW1.js');
const PW2 = require('../../utils/trackData/aaPWData/PW2.js');
const PW3 = require('../../utils/trackData/aaPWData/PW3.js');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Tracks', [
      ...hs1v1,
      ...hs1v2,
      ...hs2v1,
      ...hs2v2,
      ...hs3,
      ...hs4,
      ...mh1,
      ...mh2,
      ...fe3h,
      ...dgrn,
      ...PW1,
      ...PW2,
      ...PW3,
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tracks', null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
