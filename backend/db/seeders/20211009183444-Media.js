'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Media', [

        { name: "Haikyu!!", bannerURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633810793/Haikyu%21%21/HaikyuBanner_bnitml.png", infoLink: "https://myanimelist.net/anime/20583/Haikyuu", description: "Haikyu!! is a Japanese manga series written and illustrated by Haruichi Furudate. The story follows Shōyō Hinata, a boy determined to become a great volleyball player despite his small stature." },
        { name: "My Hero Academia", bannerURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633810874/My%20Hero%20Academia/MHABanner_xjn34b.jpg", infoLink: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia", description: "My Hero Academia is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi. The story follows Izuku Midoriya, a boy born without superpowers in a world where they have become commonplace, but who still dreams of becoming a superhero himself."},
        { name: "Fire Emblem: Three Houses", bannerURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633810655/Fire%20Emblem:%20Three%20Houses/FE3HBanner_gw85tx.jpg", infoLink: "https://www.nintendo.com/games/detail/fire-emblem-three-houses-switch/", description: "Fire Emblem: Three Houses is a tactical role-playing game developed by Intelligent Systems and Koei Tecmo for the Nintendo Switch and published worldwide by Nintendo."},
        { name: "Danganronpa", bannerURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633810890/Danganronpa/danganronpaBanner_txgcsp.jpg", infoLink: "http://danganronpa.us/", description: "Danganronpa is a Japanese video game franchise created by Kazutaka Kodaka and developed and owned by Spike Chunsoft. The series surrounds a group of high school students who are forced into murdering each other by a bear named Monokuma. Gameplay features a mix of adventure, visual novel, and dating simulator elements."}

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Media", null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
