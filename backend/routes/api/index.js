// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const mediaRouter = require('./media.js');
const tracksRouter = require('./track.js');
const albumsRouter = require('./album.js');
const commentsRouter = require('./comment.js');
const playlistRouter = require('./playlist.js');
const playlistLinkRouter = require('./playlistlink.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/media', mediaRouter);
router.use('/tracks', tracksRouter);
router.use('/albums', albumsRouter);
router.use('/comments', commentsRouter);
router.use('/playlists', playlistRouter);
router.use('/playlistLinks', playlistLinkRouter);

module.exports = router;
