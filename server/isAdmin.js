const isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
        return next();
    }
    return res.status(403).json({ message: 'Forbidden: Admin access required' });
};

module.exports = isAdmin;