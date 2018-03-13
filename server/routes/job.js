const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var Job = require('../models/job');

module.exports = (app) => {
    
    app.get('/api/jobs', (req, res) => {

        Job.find({}, (err, jobs) => {
            if(err) res.json(err);

            res.json(jobs);
        });
    });
};