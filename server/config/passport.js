const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

require('../models/user');

// Get User Model
const User = mongoose.model('users');

module.exports = (passport) => {
    
    //passport serialize user
    passport.serializeUser( (user, done) => {
        done(null, user);
    });

    //passport deserialize user
    passport.deserializeUser( (user, done) => {
        done(null, user);
    });

    passport.use('local-login', new LocalStrategy({usernameField: 'email', passwordField: 'password'}, async(email, password, done) => {
                //res.json('test');
                //console.log(test); 
                const user = await User.findOne({email: email});

                if( user ){

                    if(bcrypt.compareSync(password, user.password)){
                        return done(null, user);
                    }
                    
                }

                //return invalid user
               // return done(null, false);
               return done(null, true, {message: 'Invalid Login'});

            }
        )
    )
};