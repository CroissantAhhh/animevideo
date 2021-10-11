const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const AlbumRepository = require('../../db/album-repository');

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const albums = await AlbumRepository.list();
        return res.json({
            albums
        });
    }),
);

router.get(
    "/:query",
    asyncHandler(async (req, res) => {
        const albums = await AlbumRepository.search(req.params.query);
        return res.json({
            albums
        });
    }),
);

module.exports = router;
