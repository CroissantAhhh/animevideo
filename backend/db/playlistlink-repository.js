const { Op } = require("sequelize");
const { PlaylistLink } = require("./models");
const { URLify } = require("../utils/helpers");

async function create(details) {
    const playlistLink = await PlaylistLink.create(details);
    return playlistLink;
};

async function del(id) {
    const playlistLink = PlaylistLink.findByPk(id);
    playlistLink.destroy();
};

module.exports = {
    create,
    del,
};
