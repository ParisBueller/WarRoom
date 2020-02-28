const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(mongoose.Types.ObjectId(id))
        .then(user => {
            done(null, user);
        })
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        const name = profile.name.givenName + " " + profile.name.familyName;
        const googleUser = await User.findOne({ googleId: profile.id});
        const existingUser = await User.findOne({ email: profile.emails[0].value, name:name});
        if (googleUser) {
            return done(null, googleUser)
        } else if (existingUser) {
            await User.findOneAndUpdate({ googleId: profile.id})
            return done(null, existingUser);
        } else {
            const newGoogleUser = await new User({googleId: profile.id, email: profile.emails[0].value, name: name}).save()
            return done(null, newGoogleUser);
        }
    }
    )
);