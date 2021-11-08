const { PlaylistLink } = require("./models");

async function create(details) {
    const playlistLink = await PlaylistLink.create(details);
    return playlistLink.playlistId;
};

async function del(playlistId, trackId) {
    const playlistLink = await PlaylistLink.findAll({
        where: {
            playlistId,
            trackId,
        }
    });
    console.log(playlistLink)
    await playlistLink[0].destroy();
    return playlistId;
};

module.exports = {
    create,
    del,
};
