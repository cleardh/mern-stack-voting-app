const router = require('express').Router();

const handler = require('../handlers');
const auth = require('../middlewares/auth');

router
    .route('/')
    .get(handler.showPolls)
    .post(auth, handler.createPoll);

module.exports = router;