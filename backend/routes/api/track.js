const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Track } = require('../../db/models');

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const tracks = await Track.findAll({
            include: ["album", "artist", "medium"],
            limit: 15
        });
        return res.json({
            tracks
        });
    }),
);

module.exports = router;
