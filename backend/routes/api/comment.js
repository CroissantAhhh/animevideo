const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { process } = require('../../utils/process');
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

module.exports = router;
