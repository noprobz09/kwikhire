const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (app) => {
    
    app.post('/api/users/create', async (req, res) => {

        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

      //  console.log(newUser);
        User.checkAvailability(newUser, (err, user) => {
           
            if(err) throw err;

            if(user) {
                console.log('email or password is available')
            }
            console.log('xxxxxxxx');
        });
        // User.addUser(newUser, (err, user) => {
        //     if(err) {
        //         res.json({success: false, msg: 'Failed to register user'})
        //     } else {
        //         res.json({success: true, msg: 'User Register'});
        //     }
        // });
    });

    app.post('/api/users/authenticate', async(req, res) => {
        
        const username = req.body.username;
        const password = req.body.password;

        User.getUserByUsername(username, (err, user) => {
            if(err) throw err;

            if(!user) {
                return res.json({success: false, msg: 'User not found'});
            }

            User.comparePassword(password, user.password, (err, isMatch) => {
                if(err) throw err;

                if(isMatch) {
                    const token = user.id;

                    res.json({
                        success: true,
                        token: token,
                        user: {
                            id: user._id,
                            name: user.name,
                            username: user.username,
                            email: user.email
                        }
                    })
                } else {
                    res.json({success: false, msg: 'Wrong Password'});
                }
            });

        });
    });

};