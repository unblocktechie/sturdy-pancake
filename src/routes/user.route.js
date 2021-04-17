const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

router.get('/id/:id', awaitHandlerFactory(userController.getNftById)); // localhost:3000/api/nfts/id/1

module.exports = router;