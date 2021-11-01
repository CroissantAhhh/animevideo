const { PlaylistLink } = require("./models");

async function create(details) {
    const playlistLink = await PlaylistLink.create(details);
    return playlistLink.playlistId;
};

async function del(id) {
    const playlistLink = PlaylistLink.findByPk(id);
    playlistLink.destroy();
};

module.exports = {
    create,
    del,
};
