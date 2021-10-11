const { Track } = require("./models");
const { Op } = require("sequelize");


async function rollTracks(length) {
    const DATASIZE = await Track.count() - 1;
    console.log(DATASIZE);
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
    return track.id;
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
    shorterList,
    get,
    getRandom,
    create,
    search,
    update,
    del,
}
