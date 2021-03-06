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
      { name: "Danganronpa Trigger Happy Havoc Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1633813259/Danganronpa/Trigger%20Happy%20Havoc/Cover_lzzx4r.jpg", artist: "Yuki Hayashi", mediumId: 4},
      { name: "Haikyu!! Karasuno High School VS Shiratorizawa Academy Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634656717/Haikyu%21%21/Karasuno%20vs%20Shiratorizawa%20OST/Cover_mhbrex.jpg", artist: "Yuki Hayashi", mediumId: 1},
      { name: "Haikyu!! To The Top Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634657108/Haikyu%21%21/To%20the%20Top%21%20OST/Cover_egrsmg.jpg", artist: "Yuki Hayashi", mediumId: 1},
      { name: "Phoenix Wright: Ace Attorney Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634657896/Ace%20Attorney/Game%201/Disc_1_Front_vtn3d7.jpg", artist: "Masakazu Sugimori", mediumId: 5},
      { name: "Phoenix Wright: Ace Attorney - Justice for All - Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634658075/Ace%20Attorney/Game%202/Disc_2_Front_cva0lf.jpg", artist: "Masakazu Sugimori", mediumId: 5},
      { name: "Phoenix Wright: Ace Attorney - Trials and Tribulations - Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634658320/Ace%20Attorney/Game%203/Disc_3_Front_sqefry.jpg", artist: "Noriyuki Iwadare", mediumId: 5},
      { name: "My Hero Academia 3rd Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634660757/My%20Hero%20Academia/Season%203%20Soundtrack/Cover_hk04uo.jpg", artist: "Yuki Hayashi", mediumId: 2},
      { name: "My Hero Academia 4th Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634661090/My%20Hero%20Academia/Season%204%20Soundtrack/Cover_ja9etg.jpg", artist: "Yuki Hayashi", mediumId: 2},
      { name: "My Hero Academia 5th Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634838338/My%20Hero%20Academia/Season%205%20Soundtrack/cover_w907yk.jpg", artist: "Yuki Hayashi", mediumId: 2},
      { name: "Pokemon Sword & Pokemon Shield: Super Music Collection", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634663647/Pokemon/Sword-Shield/Cover_y525tr.png", artist: "Minako Adachi/Go Ichinose", mediumId: 6},
      { name: "Pokemon Diamond & Pokemon Pearl: Super Music Collection", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634662995/Pokemon/Diamond-Pearl/Cover_ddhg7n.png", artist: "Junichi Masuda/Go Ichinose", mediumId: 6},
      { name: "Monster Hunter: World Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634664624/Monster%20Hunter/Monster%20Hunter%20World/Cover_sqkabe.png", artist: "Akihiko Narita, Yuko Komiyama", mediumId: 7},
      { name: "Monster Hunter World: Iceborne Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634666012/Monster%20Hunter/Monster%20Hunter%20World%20-%20Iceborne/COVER_mpvmbk.jpg", artist: "Akihiko Narita, Yuko Komiyama", mediumId: 7},
      { name: "Monster Hunter: Hunting Music Ultimate Collection", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1635285727/Monster%20Hunter/Hunting%20Music%20Ultimate%20Collection/Cover_q2a3ot.jpg", artist: "Various Artists", mediumId: 7},
      { name: "Naruto Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634658424/Naruto/Naruto%201/Cover_nrtxl6.jpg", artist: "Toshio Masuda", mediumId: 8},
      { name: "Naruto Original Soundtrack II", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634658748/Naruto/Naruto%202/Cover_qm9obd.jpg", artist: "Toshio Masuda", mediumId: 8},
      { name: "Naruto Original Soundtrack III", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634658937/Naruto/Naruto%203/Cover_gbni3k.jpg", artist: "Toshio Masuda", mediumId: 8},
      { name: "Naruto Shippuden: Original Soundtrack", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg", artist: "Yasuharu Takanashi", mediumId: 8},
      { name: "Naruto Shippuden: Original Soundtrack II", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634660161/Naruto/Naruto%20Shippuden%202/Cover_wl6fnj.jpg", artist: "Yasuharu Takanashi", mediumId: 8},
      { name: "Naruto Shippuden: Original Soundtrack III", albumImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634660403/Naruto/Naruto%20Shippuden%203/Cover_k0qoum.jpg", artist: "Yasuharu Takanashi", mediumId: 8},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, { truncate: true, restartIdentity: true , cascade: true });
  }
};
