const narutoS1 = [
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659744/Naruto/Naruto%20Shippuden%201/01._Shippuden_izfcsj.mp3", name: "Shippuden", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659762/Naruto/Naruto%20Shippuden%201/02._Heaven_Shaking_Event_cbw0vl.mp3", name: "Heaven-Shaking Event", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659736/Naruto/Naruto%20Shippuden%201/03._Homecoming_agz4ee.mp3", name: "Homecoming", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659743/Naruto/Naruto%20Shippuden%201/04._Experienced_Many_Battles_fdunun.mp3", name: "Experienced Many Battles", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659743/Naruto/Naruto%20Shippuden%201/05._Lightning_Speed_qivd3o.mp3", name: "Lightning Speed", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659748/Naruto/Naruto%20Shippuden%201/06._Mission_bx2zau.mp3", name: "Mission", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659788/Naruto/Naruto%20Shippuden%201/07._Man_of_the_World_txspz5.mp3", name: "Man of the World", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659780/Naruto/Naruto%20Shippuden%201/08._Departure_to_the_Front_Lines_v3jsmh.mp3", name: "Departure to the Front Lines", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659809/Naruto/Naruto%20Shippuden%201/09._Anger_kbiiun.mp3", name: "Anger", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659796/Naruto/Naruto%20Shippuden%201/10._Akatsuki_jtzpim.mp3", name: "Akatsuki", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659787/Naruto/Naruto%20Shippuden%201/11._Scene_of_a_Disaster_r6szph.mp3", name: "Scene of a Disaster", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659799/Naruto/Naruto%20Shippuden%201/12._Jinchuuriki_iyyk9j.mp3", name: "Jinchuriki", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659818/Naruto/Naruto%20Shippuden%201/13._Loneliness_eqsg5v.mp3", name: "Loneliness", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659815/Naruto/Naruto%20Shippuden%201/14._Nightfall_d0dfg0.mp3", name: "Nightfall", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659828/Naruto/Naruto%20Shippuden%201/15._Hidden_Will_to_Fight_oquen8.mp3", name: "Hidden Will to Fight", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659834/Naruto/Naruto%20Shippuden%201/16._Unparalleled_Throughout_History_lliagd.mp3", name: "Unparalleled Throughout History", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659840/Naruto/Naruto%20Shippuden%201/17._Setting_Sun_foehzn.mp3", name: "Setting Sun", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659855/Naruto/Naruto%20Shippuden%201/18._Emergence_of_Talents_fqmwz2.mp3", name: "Emergence of Talents", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659855/Naruto/Naruto%20Shippuden%201/19._Despair_q3nqqt.mp3", name: "Despair", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659850/Naruto/Naruto%20Shippuden%201/20._Dark_Clouds_xkhmks.mp3", name: "Dark Clouds", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659880/Naruto/Naruto%20Shippuden%201/21._Stalemate_bdfynx.mp3", name: "Stalemate", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659879/Naruto/Naruto%20Shippuden%201/22._Tragic_duslab.mp3", name: "Tragic", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659890/Naruto/Naruto%20Shippuden%201/23._Confronting_gdvciv.mp3", name: "Confronting", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659900/Naruto/Naruto%20Shippuden%201/24._Strangeness_hnb6br.mp3", name: "Strangeness", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659897/Naruto/Naruto%20Shippuden%201/25._Risking_it_All_jcyyyi.mp3", name: "Risking it All", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659915/Naruto/Naruto%20Shippuden%201/26._Reverse_Situation_egbyuz.mp3", name: "Reverse Situation", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659911/Naruto/Naruto%20Shippuden%201/27._Companions_yq96rv.mp3", name: "Companions", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},
    { fileURL: "https://res.cloudinary.com/dmtj0amo0/video/upload/v1634659947/Naruto/Naruto%20Shippuden%201/28._Hurricane_Suite_txthhv.mp3", name: "Hurricane Suite", userId: 1, albumId: 25, mediumId: 8, trackImageURL: "https://res.cloudinary.com/dmtj0amo0/image/upload/v1634659892/Naruto/Naruto%20Shippuden%201/Cover_ntwyb4.jpg"},

]

module.exports = narutoS1;
