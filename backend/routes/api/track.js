const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const TracksRepository = require('../../db/tracks-repository');

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const tracks = await TracksRepository.getRandomTracks(20);
        return res.json({
            tracks
        });
    }),
);

router.post(
    "/",
    asyncHandler(async (req, res) => {

    })
)

module.exports = router;
