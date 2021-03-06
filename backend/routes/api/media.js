const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { process } = require('../../utils/helpers');
const MediaRepository = require('../../db/media-repository');

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const media = await MediaRepository.list();
        return res.json({
            media
        });
    }),
);

router.get(
    "/:query",
    asyncHandler(async (req, res) => {
        const query = process(req.params.query)
        const media = await MediaRepository.search(query);
        return res.json({
            media
        });
    }),
);

router.get(
    "/byId/:mediumId",
    asyncHandler(async (req, res) => {
        const mediumId = process(req.params.mediumId)
        const media = await MediaRepository.getOne(mediumId);
        return res.json({
            media
        });
    }),
);

router.post(
    "/",
    asyncHandler(async (req, res) => {
        const medium = await MediaRepository.create(req.body);
        return res.json({
            medium
        })
    })
);

module.exports = router;
