'use strict';
const hs1v1 = require('../../utils/trackData/haikyuData/haikyuS1V1.js');
const hs1v2 = require('../../utils/trackData/haikyuData/haikyuS1V2.js');
const hs2v1 = require('../../utils/trackData/haikyuData/haikyuS2V1.js');
const hs2v2 = require('../../utils/trackData/haikyuData/haikyuS2V2.js');
const hs3 = require('../../utils/trackData/haikyuData/haikyuS3.js');
const hs4 = require('../../utils/trackData/haikyuData/haikyuS4.js');
const mh1 = require('../../utils/trackData/myheroData/myheroS1.js');
const mh2 = require('../../utils/trackData/myheroData/myheroS2.js');
const mh3 = require('../../utils/trackData/myheroData/myheroS3.js');
const mh4 = require('../../utils/trackData/myheroData/myheroS4.js');
const mh5 = require('../../utils/trackData/myheroData/myheroS5.js');
const fe3h = require('../../utils/trackData/feData.js');
const dgrn = require('../../utils/trackData/danganData.js');
const PW1 = require('../../utils/trackData/aaPWData/PW1.js');
const PW2 = require('../../utils/trackData/aaPWData/PW2.js');
const PW3 = require('../../utils/trackData/aaPWData/PW3.js');
const pokeswsh = require('../../utils/trackData/pokemonData/pokeswsh.js');
const pokedp = require('../../utils/trackData/pokemonData/pokedp.js');
const mhw = require('../../utils/trackData/MHData/mhw.js');
const mhwice = require('../../utils/trackData/MHData/mhwice.js');
const mhall = require('../../utils/trackData/MHData/mhall.js');
const naruto1 = require('../../utils/trackData/narutoData/naruto1.js');
const naruto2 = require('../../utils/trackData/narutoData/naruto2.js');
const naruto3 = require('../../utils/trackData/narutoData/naruto3.js');
const narutoS1 = require('../../utils/trackData/narutoData/narutoS1.js');
const narutoS2 = require('../../utils/trackData/narutoData/narutoS2.js');
const narutoS3 = require('../../utils/trackData/narutoData/narutoS3.js');

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
      ...mh3,
      ...mh4,
      ...mh5,
      ...fe3h,
      ...dgrn,
      ...PW1,
      ...PW2,
      ...PW3,
      ...pokeswsh,
      ...pokedp,
      ...mhw,
      ...mhwice,
      ...mhall,
      ...naruto1,
      ...naruto2,
      ...naruto3,
      ...narutoS1,
      ...narutoS2,
      ...narutoS3,
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tracks', null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
