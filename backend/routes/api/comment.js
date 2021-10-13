const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { process } = require('../../utils/helpers');
const CommentRepository = require('../../db/comment-repository');

const router = express.Router();

router.get(
    "/:trackId",
    asyncHandler(async (req, res) => {
        const query = process(req.params.trackId);
        const comments = await CommentRepository.listByTrack(query);
        return res.json({
            comments
        });
    }),
);

router.post(
    "/",
    asyncHandler(async (req, res) => {
        const comment = await CommentRepository.create(req.body);
        return res.json({
            comment
        })
    })
);

module.exports = router;
