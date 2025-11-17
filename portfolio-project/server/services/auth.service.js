const handleLogout = (req, callback) => {
    req.logout((err) => {
        if (err) {
            return callback(err);
        }
        req.session.destroy((err) => {
            callback(err);
        });
    });
};

module.exports = {
    handleLogout
};