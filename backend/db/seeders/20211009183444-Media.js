'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Media', [

        { name: "Haikyu!!", bannerURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633810793/Haikyu%21%21/HaikyuBanner_bnitml.png", infoLink: "https://myanimelist.net/anime/20583/Haikyuu", description: "Haikyu!! is a Japanese manga series written and illustrated by Haruichi Furudate. The story follows Shōyō Hinata, a boy determined to become a great volleyball player despite his small stature." },
        { name: "My Hero Academia", bannerURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633810874/My%20Hero%20Academia/MHABanner_xjn34b.jpg", infoLink: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia", description: "My Hero Academia is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi. The story follows Izuku Midoriya, a boy born without superpowers in a world where they have become commonplace, but who still dreams of becoming a superhero himself."},
        { name: "Fire Emblem: Three Houses", bannerURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633810655/Fire%20Emblem:%20Three%20Houses/FE3HBanner_gw85tx.jpg", infoLink: "https://www.nintendo.com/games/detail/fire-emblem-three-houses-switch/", description: "Fire Emblem: Three Houses is a tactical role-playing game developed by Intelligent Systems and Koei Tecmo for the Nintendo Switch and published worldwide by Nintendo."},
        { name: "Danganronpa", bannerURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633810890/Danganronpa/danganronpaBanner_txgcsp.jpg", infoLink: "http://danganronpa.us/", description: "Danganronpa is a Japanese video game franchise created by Kazutaka Kodaka and developed and owned by Spike Chunsoft. The series surrounds a group of high school students who are forced into murdering each other by a bear named Monokuma. Gameplay features a mix of adventure, visual novel, and dating simulator elements."},
        { name: "Ace Attorney", bannerURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634658328/Ace%20Attorney/Box_Front_ex2mua.jpg", infoLink: "https://www.ace-attorney.com/", description: "Ace Attorney is a series of adventure video game legal dramas developed by Capcom. The first entry in the series, Phoenix Wright: Ace Attorney, was released in 2001; since then, five further main series games, as well as various spin-offs and high-definition remasters for newer game consoles, have been released." },
        { name: "Pokemon", bannerURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634839074/Pokemon/pokemonBanner_vartur.jpg", infoLink: "https://www.pokemon.com/us/", description: "An anime series based on the popular Game Boy game 'Pocket Monsters' in which children raise a pocket monster and train it to fight other monsters. In this show, Satoshi and his Pokemon, Pikachu, travel the land hoping to improve their skills and eventually become the grand champions."},
        { name: "Monster Hunter", bannerURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1635108408/Monster%20Hunter/Screen_Shot_2021-10-24_at_1.46.21_PM_l9ce6g.png", infoLink: "https://www.monsterhunter.com/", description: "The games are primarily action role-playing games. The player takes the role of a Hunter, slaying or trapping large monsters across various landscapes as part of quests given to them by locals, with some quests involving the gathering of a certain item or items, which may put the Hunter at risk of facing various monsters. As part of its core gameplay loop, players use loot gained from slaying monsters, gathering resources, and quest rewards to craft improved weapons, armor, and other items that allow them to face more powerful monsters. All main series titles feature multiplayer (usually up to four players cooperatively), but can also be played single player."}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Media", null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
