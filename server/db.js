const mongoose = require('mongoose');

uri='mongodb+srv://HsOrganization:JfnHWEn56BbP5aMy@cluster0.r607s.mongodb.net/Feedback?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(!err)
        console.log('MongoDB connection successful');
    else
        console.log(err);
    
});

module.exports = mongoose;
