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
    return comment;
}

async function update(details) {
    const comment = await Comment.findByPk(details.id);
    comment.body = details.body;
    await comment.save();
    return comment;
}

async function del(id) {
    const comment = await Comment.findByPk(id);
    await comment.destroy();
};

module.exports = {
    listByTrack,
    create,
    update,
    del,
}
