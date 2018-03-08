const mongoose = require('mongoose');

require('../models/user');

// Get User Model
const User = mongoose.model('users');

module.exports = (app) => {
    
    app.get('/user', (req, res) => {
        res.send({'Welcome': 'User Page'});
    });

    app.post('/api/user/create', async (req, res) => {

            //res.json(req.body);

            const existingUser = await User.findOne({email: req.body.email});

            if( existingUser ){
                res.json({exist: true});
            }else{
                const user = new User({
                    company: req.body.company,
                    fullname: req.body.fullname,
                    email: req.body.email,
                    phone: req.body.phone,
                    password: req.body.password,
                });

                try{
                    let newUser = await user.save();
                
                    res.json(newUser);
            
                } catch (err){
                    res.json(err);
                }

            }

    });

};