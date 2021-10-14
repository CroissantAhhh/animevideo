const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { process } = require('../../utils/helpers');
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
    "/search/:mediumName/:albumName",
    asyncHandler(async (req, res) => {
        const mediumName = req.params.mediumName;
        const albumName = req.params.albumName;
        const album = await AlbumRepository.getTargetAlbum(mediumName, albumName);
        return res.json({
            album
        });
    }),
)

router.get(
    "/media/:mediumId",
    asyncHandler(async (req, res) => {
        const mediumId = req.params.mediumId;
        const albums = await AlbumRepository.listByMedia(mediumId);
        return res.json({
            albums
        });
    }),
);

router.get(
    "/:query",
    asyncHandler(async (req, res) => {
        const query = process(req.params.query);
        const albums = await AlbumRepository.search(query);
        return res.json({
            albums
        });
    }),
);

router.post(
    "/",
    asyncHandler(async (req, res) => {
        const album = await AlbumRepository.create(req.body);
        return res.json({
            album
        })
    })
);

module.exports = router;
