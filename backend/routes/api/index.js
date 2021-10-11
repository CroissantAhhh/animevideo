// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const mediaRouter = require('./media.js');
const tracksRouter = require('./track.js');
const albumsRouter = require('./album.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/media', mediaRouter);
router.use('/tracks', tracksRouter);
router.use('/albums', albumsRouter);

module.exports = router;
