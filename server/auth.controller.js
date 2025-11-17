const passport = require('passport');
const authService = require('./auth.service');

const googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });

const googleCallback = passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: process.env.CLIENT_URL + '/admin'
});

const logoutUser = (req, res) => {
    authService.handleLogout(req, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.status(200).json({ message: 'Logged out successfully' });
    });
};

const getCurrentUser = (req, res) => {
    if (req.user) {
        res.json(req.user);
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
};

module.exports = {
    googleLogin,
    googleCallback,
    logoutUser,
    getCurrentUser
};