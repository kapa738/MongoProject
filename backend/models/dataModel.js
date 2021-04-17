const mongoose = require('mongoose');

const violationDataSchema = new mongoose.Schema({}, {collection:'Montgomery'});

const violationData = mongoose.model('violationData', violationDataSchema);

module.exports = violationData;