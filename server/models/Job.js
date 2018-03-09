var mongoose = require('mongoose');

var JobSchema = mongoose.Schema({
    title : {
        type: String
    },
    slug : {
        type: String
    }
});


var Job = module.exports = mongoose.model("Job", JobSchema);