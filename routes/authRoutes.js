const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['https://www.googleapis.com/auth/userinfo.profile',
                    'https://www.googleapis.com/auth/userinfo.email'
                    ]
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/login');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
    
};

