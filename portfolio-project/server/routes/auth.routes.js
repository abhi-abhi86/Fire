const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.get('/google', authController.googleLogin);
router.get('/google/callback', authController.googleCallback);
router.post('/logout', authController.logoutUser);
router.get('/user', authController.getCurrentUser);

module.exports = router;