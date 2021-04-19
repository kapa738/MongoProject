const router = require('express').Router();
let violationData = require('../models/dataModel');

router.route('/').get((req,res)=> {
    violationData.find().limit(5)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;