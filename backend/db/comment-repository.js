const { Op } = require("sequelize");
const { Comment } = require("./models");


async function listByTrack(trackId) {
    return await Comment.findAll({
        where: {
            trackId: trackId
        }
    });
};

async function create(details) {
    const comment = await Comment.create(details);
    return comment.id;
}

async function update(details) {
    const id = details.id;
    delete details.id;
    await Comment.update(
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
    const comment = Comment.findByPk(id);
    comment.destroy();
};

module.exports = {
    listByTrack,
    create,
    update,
    del,
}
