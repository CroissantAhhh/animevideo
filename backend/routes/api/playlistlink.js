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
    "/:playlistId/:trackId",
    asyncHandler(async (req, res) => {
        await PlaylistLinkRepository.del(req.params.playlistId, req.params.trackId);
        return res.json({
            playlistId: req.params.playlistId
        })
    })
);

module.exports = router;
