const { Op } = require("sequelize");
const { Album } = require("./models");


async function search(query) {
    return await Album.findAll({
        where: {
            name: {
                [Op.like]: `%${query}%`
            }
        }
    });
};

async function create(details) {
    const album = await Album.create(details);
    return album.id;
}

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
}

async function del(id) {
    const album = Album.findByPk(id);
    album.destroy();
};

module.exports = {
    search,
    create,
    update,
    del,
}
