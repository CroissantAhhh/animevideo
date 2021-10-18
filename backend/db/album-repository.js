const { Op } = require("sequelize");
const { Album } = require("./models");
const { URLify } = require("../utils/helpers");

async function listByMedia(mediumId) {
    return await Album.findAll({
        include: ["medium"],
        where: {
            mediumId
        }
    });
};

async function getTargetAlbum(mediumName, albumName) {
    const searched = await Album.findAll({
        include: ["medium"],
    });
    return [searched.find(album => {
        return ((URLify(album.medium.dataValues.name) === mediumName) &&
                (URLify(album.dataValues.name) === albumName));
    })];
};

async function search(query) {
    return await Album.findAll({
        where: {
            name: {
                [Op.iLike]: `%${query}%`
            }
        },
        include: ["medium"]
    });
};

async function create(details) {
    const album = await Album.create(details, {
        include: ["medium"]
    });
    return album;
};

async function update(details) {
    const id = details.id;
    delete details.id;
    await Album.update(
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
    const album = Album.findByPk(id);
    album.destroy();
};

module.exports = {
    listByMedia,
    getTargetAlbum,
    search,
    create,
    update,
    del,
};
