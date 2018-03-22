const router = require('express').Router();
const controller = require('../users/controller');

router.get('/', controller.getAllUsers);
router.post('/:username', controller.getUserById);
router.delete('/:username', controller.deleteUserById);
router.patch('/:username', controller.modifyById);
router.post('/:username/tweets', controller.addTweetById);
router.get('/', controller.getAllTweets);
router.post('/:id', controller.deleteTweetsById);

module.exports = router;