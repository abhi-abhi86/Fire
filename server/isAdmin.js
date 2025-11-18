const isAdmin = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ 
            message: 'Authentication required' 
        });
    }
    
    if (!req.user || !req.user.isAdmin) {
        return res.status(403).json({ 
            message: 'Access denied. Admin privileges required.' 
        });
    }
    
    next();
};

module.exports = isAdmin;