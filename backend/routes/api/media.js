const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Media } = require('../../db/models');

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const media = await Media.findAll({});
        return res.json({
            media
        });
    }),
);

module.exports = router;
