const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (app) => {
    
    //test user page
    app.get('/user', (req, res) => {
        res.send({'Welcome': 'User Page'});
    });


    //create
    // app.post('/api/user/create', async (req, res) => {

    //         //res.json(req.body);

    //         const existingUser = await User.findOne({email: req.body.email});

    //         if( existingUser ){
                
    //             res.status(200).send('Email "' + req.body.email + '" is already exist');
                
    //         }else{
    //             const user = new User({
    //                 company: req.body.company,
    //                 fullname: req.body.fullname,
    //                 email: req.body.email,
    //                 phone: req.body.phone,
    //                 password: bcrypt.hashSync(req.body.password, 10),
    //             });

    //             try{
    //                 let newUser = await user.save();
                
    //                 res.json(newUser);
            
    //             } catch (err){
    //                 res.json(err);
    //             }

    //         }

    // });

    //login
    app.post('/api/user/login', async(req, res) => {
        
        console.log('llll');
        console.log(req.user);  
        User.findOne({email: req.body.email}, (err, user) => 
        {
            if(err) res.json(err);
            
            if(!user )
            console.log(user);
            res.json(user);
        });
    });

};