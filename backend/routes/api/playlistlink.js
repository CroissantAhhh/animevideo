const express = require('express');
const asyncHandler = require('express-async-handler');
const PlaylistLinkRepository = require('../../db/playlistlink-repository');

const router = express.Router();

router.post(
    "/",
    asyncHandler(async (req, res) => {
        const playlistLink = await PlaylistLinkRepository.create(req.body);
        return res.json({
            playlistLink
        })
    })
);

router.delete(
    "/:id",
    asyncHandler(async (req, res) => {
        const playlistLink = await PlaylistLinkRepository.delete(req.params.id);
        return res.json({
            playlistLink
        })
    })
);

module.exports = router;
