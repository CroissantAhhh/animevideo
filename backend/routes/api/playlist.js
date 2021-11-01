const express = require('express');
const asyncHandler = require('express-async-handler');

const { process } = require('../../utils/helpers');
const PlaylistRepository = require('../../db/playlist-repository');

const router = express.Router();

router.get(
    "/byId/:playlistId",
    asyncHandler(async (req, res) => {
        const playlists = await PlaylistRepository.getOne(req.params.playlistId);
        return res.json({
            playlists
        });
    }),
);

router.get(
    "/byUser/:userId",
    asyncHandler(async (req, res) => {
        const playlists = await PlaylistRepository.getByUser(req.params.userId);
        return res.json({
            playlists
        });
    }),
);

router.get(
    "/:query",
    asyncHandler(async (req, res) => {
        const query = process(req.params.query);
        const playlists = await PlaylistRepository.search(query);
        return res.json({
            playlists
        });
    }),
);

router.post(
    "/",
    asyncHandler(async (req, res) => {
        const playlist = await PlaylistRepository.create(req.body);
        return res.json({
            playlist
        })
    })
);

module.exports = router;
