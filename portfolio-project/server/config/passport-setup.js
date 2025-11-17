const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User.model');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.SERVER_URL}/api/auth/google/callback`
}, async(accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
            // Update admin status if email matches
            if (profile.emails[0].value === process.env.ADMIN_EMAIL) {
                user.isAdmin = true;
                await user.save();
            }
            return done(null, user);
        } else {
            // Create new user
            const newUser = new User({
                googleId: profile.id,
                email: profile.emails[0].value,
                displayName: profile.displayName,
                isAdmin: profile.emails[0].value === process.env.ADMIN_EMAIL
            });

            await newUser.save();
            return done(null, newUser);
        }
    } catch (error) {
        return done(error, null);
    }
}));