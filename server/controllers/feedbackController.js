const express = require('express');

var router = express.Router();

var ObjectId= require('mongoose').Types.ObjectId;

var { Feedback } = require('../models/feedback');

router.get('/',(req,res)=>{
    Feedback.find((err,docs)=>{
        if(!err)
            res.send(docs);
        else
            console.log('Error in Retriving feedbacks '+err);
        
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id:${req.params.id}`);
    else
        Feedback.findById(req.params.id,(err,doc)=>{
            if(!err)
                res.send(doc);
            else
                console.log('Error in finding by id: ',err);
        });

});


router.post('/', (req,res)=>{
    var feedback = new Feedback({
        studentname: req.body.studentname,
        teachername: req.body.teachername,
        subknowledge: req.body.subknowledge,
        insqual:req.body.insqual,
        creativity:req.body.creativity,
        approach:req.body.approach,
        avgscore:(req.body.subknowledge+req.body.insqual+req.body.creativity+req.body.approach)/4
    });
    console.log(feedback.subknowledge);
    feedback.save((err,doc)=>{
        if(!err)
            res.send(doc);
        else
            console.log('Error in adding feedback details to the database '+err);
    });
});

module.exports = router;