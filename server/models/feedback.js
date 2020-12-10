const mongoose = require('mongoose');

var Feedback = mongoose.model('Feedback',{
    studentname: { type: String },
    teachername: { type: String },
    subknowledge: { type: Number },
    insqual:{type: Number},
    creativity:{type: Number},
    approach:{type:Number},
    avgscore:{type:Number}

});

module.exports = {Feedback};