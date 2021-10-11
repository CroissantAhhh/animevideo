const { Op } = require("sequelize");
const { Media } = require("./models");


async function list() {
    return await Media.findAll();
};

async function search(query) {
    return await Media.findAll({
        where: {
            name: {
                [Op.iLike]: `%${query}%`
            }
        }
    });
};

async function create(details) {
    const media = await Media.create(details);
    return media.id;
}

async function update(details) {
    const id = details.id;
    delete details.id;
    await Media.update(
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
    const medium = Media.findByPk(id);
    medium.destroy();
};

module.exports = {
    list,
    search,
    create,
    update,
    del,
}
