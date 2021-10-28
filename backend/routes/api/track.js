const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { process } = require('../../utils/helpers');
const TracksRepository = require('../../db/tracks-repository');

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const tracks = await TracksRepository.list();
        return res.json({
            tracks
        });
    }),
);

router.get(
    "/byId/:trackId",
    asyncHandler(async (req, res) => {
        const track = await TracksRepository.get(req.params.trackId);
        return res.json({
            track
        });
    }),
);

router.get(
    "/random",
    asyncHandler(async (req, res) => {
        const tracks = await TracksRepository.getRandom(20);
        return res.json({
            tracks
        });
    }),
);

router.get(
    "/album/:albumId",
    asyncHandler(async (req, res) => {
        const albumId = req.params.albumId;
        const tracks = await TracksRepository.listByAlbum(albumId);
        return res.json({
            tracks
        });
    }),
);

router.get(
    "/playlist/:playlistId",
    asyncHandler(async (req, res) => {
        const playlistId = req.params.albumId;
        const tracks = await TracksRepository.listByPlaylist(playlistId);
        return res.json({
            tracks
        });
    }),
);

router.get(
    "/search/:mediumName/:trackName",
    asyncHandler(async (req, res) => {
        const mediumName = req.params.mediumName;
        const trackName = req.params.trackName;
        const track = await TracksRepository.getTargetTrack(mediumName, trackName);
        return res.json({
            track
        });
    }),
)

router.get(
    "/:query",
    asyncHandler(async (req, res) => {
        const query = process(req.params.query)
        const tracks = await TracksRepository.search(query);
        return res.json({
            tracks
        });
    }),
);


router.post(
    "/",
    asyncHandler(async (req, res) => {
        const track = await TracksRepository.create(req.body);
        return res.json({
            track
        })
    })
);

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
