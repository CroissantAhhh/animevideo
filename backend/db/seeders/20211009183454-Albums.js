'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      { name: "Haikyu!! Original Soundtrack Vol.1", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633811079/Haikyu%21%21/Original%20Soundtrack%20Vol%201/Cover_pjjinj.jpg", artist: "Yuki Hayashi", mediumId: 1},
      { name: "Haikyu!! Original Soundtrack Vol.2", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633811363/Haikyu%21%21/Original%20Soundtrack%20Vol%202/cover_at9bjm.jpg", artist: "Yuki Hayashi", mediumId: 1},
      { name: "Haikyu!! Second Season Original Soundtrack Vol.1", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633811914/Haikyu%21%21/Second%20Season%20Original%20Soundtrack%20Vol%201/img262_isp1cn.jpg", artist: "Yuki Hayashi", mediumId: 1},
      { name: "Haikyu!! Second Season Original Soundtrack Vol.2", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633814944/Haikyu%21%21/Second%20Season%20Original%20Soundtrack%20Vol%202/h2s2_zpkfn2.jpg", artist: "Yuki Hayashi", mediumId: 1},
      { name: "My Hero Academia Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633812164/My%20Hero%20Academia/Season%201%20Soundtrack/Cover_eum1j5.jpg", artist: "Yuki Hayashi", mediumId: 2},
      { name: "My Hero Academia 2nd Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633812748/My%20Hero%20Academia/Season%202%20Soundtrack/Cover_uftllj.jpg", artist: "Yuki Hayashi", mediumId: 2},
      { name: "Fire Emblem Three Houses Complete Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633817292/Fire%20Emblem:%20Three%20Houses/Cover_edf4kd.jpg", artist: "Yuki Hayashi", mediumId: 3},
      { name: "Danganronpa Trigger Happy Havoc Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633813259/Danganronpa/Trigger%20Happy%20Havoc/Cover_lzzx4r.jpg", artist: "Yuki Hayashi", mediumId: 4}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
