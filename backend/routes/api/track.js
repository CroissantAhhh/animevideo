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
        const tracks = await TracksRepository.getRandom(20);
        return res.json({
            tracks
        });
    }),
);

router.get(
    "/:query",
    asyncHandler(async (req, res) => {
        const tracks = await TracksRepository.search(req.body);
        return res.json({
            tracks
        });
    }),
)

router.post(
    "/",
    asyncHandler(async (req, res) => {
        const track = await TracksRepository.create(req.body)
        return res.json({
            track
        })
    })
)

router.put(
    "/",
    asyncHandler(async (req, res) => {
        const track = await TracksRepository.update(req.body)
        return res.json({
            track
        })
    })
)

module.exports = router;
