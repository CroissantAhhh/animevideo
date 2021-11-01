const express = require('express');
const asyncHandler = require('express-async-handler');
const PlaylistLinkRepository = require('../../db/playlistlink-repository');

const router = express.Router();

router.post(
    "/",
    asyncHandler(async (req, res) => {
        console.log(req.body)
        const playlistId = await PlaylistLinkRepository.create(req.body);
        return res.json({
            playlistId
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
