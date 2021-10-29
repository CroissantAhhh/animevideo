const { Op } = require("sequelize");
const { Playlist } = require("./models");
const { URLify } = require("../utils/helpers");


async function getOne(id) {
    return await Playlist.findByPk(id, {
        include: ['playlistLinks']
    });
};

async function getByUser(userId) {
    return await Playlist.findAll({
        include: ['playlistLinks'],
        where: {
            userId
        }
    });
};

async function search(query) {
    return await Playlist.findAll({
        include: ['playlistLinks'],
        where: {
            name: {
                [Op.iLike]: `%${query}%`
            }
        },
    });
};

async function create(details) {
    const playlist = await Playlist.create(details);
    return playlist;
};

async function update(details) {
    const id = details.id;
    delete details.id;
    await Playlist.update(
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
    const playlist = Playlist.findByPk(id);
    playlist.destroy();
};

module.exports = {
    getOne,
    getByUser,
    search,
    create,
    update,
    del,
};
