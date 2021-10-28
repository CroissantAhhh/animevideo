const { Track, Playlist, PlaylistLink } = require("./models");
const { Op } = require("sequelize");
const { URLify } = require("../utils/helpers");


async function rollTracks(length) {
    const DATASIZE = await Track.count() - 1;
    let result = [];
    while (result.length < length) {
        let randomIndex = Math.floor(Math.random() * DATASIZE) + 1;
        let randomTrack = await Track.findByPk(randomIndex);
        if (!result.includes(randomTrack.name)) {
            result.push(randomTrack.name);
        };
    };
    return result;
};

async function list() {
    return await Track.findAll({
        include: ["album", "medium"],
    });
};

async function listByAlbum(albumId) {
    return await Track.findAll({
        include: ["album", "medium"],
        where: {
            albumId
        }
    })
}

async function listByPlaylist(playlistId) {
    const playlist = await Playlist.findByPk(playlistId);
    const playlistTrackIds = await PlaylistLink.findAll({
        where: {
            playlistId: playlist.id
        }
    })
    console.log(playlistTrackIds);
    return await Track.findAll({
        include: ["album", "medium"],
    })
}

async function shorterList(length) {
    return await Track.findAll({
        include: ["album", "medium"],
        limit: length
    });
};

async function get(id) {
    return await Track.findByPk(id, {
        include: ["album", "medium"]
    });
};

async function getRandom(length) {
    const randomTracks = await rollTracks(length);
    return await Track.findAll({
        include: ["album", "medium"],
        where: {
            name: randomTracks
        }
    });
};

async function getTargetTrack(mediumName, trackName) {
    const searched = await Track.findAll({
        include: ["album", "medium"],
        where: {
            name: {
                [Op.iLike]: `%${trackName.split("-").join(" ")}%`
            }
        }
    });

    return [searched.find(track => {
        return URLify(track.medium.name) === mediumName;
    })];
};

async function search(query) {
    return await Track.findAll({
        include: ["album", "medium"],
        where: {
            name: {
                [Op.iLike]: `%${query}%`
            }
        }
    });
};

async function create(details) {
    const track = await Track.create(details);
    return await Track.findByPk(track.id, {
        include: ["album", "medium"],
    })
};

async function update(details) {
    const id = details.id;
    delete details.id;
    await Track.update(
      details,
      {
        where: { id },
        returning: true,
        plain: true,
      }
    );
    return id;
};

async function del(id) {
    const track = Track.findByPk(id);
    track.destroy();
};

module.exports = {
    list,
    listByAlbum,
    listByPlaylist,
    shorterList,
    get,
    getTargetTrack,
    getRandom,
    create,
    search,
    update,
    del,
}
