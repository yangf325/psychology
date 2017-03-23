var mongoose = require('mongoose');
var quesSche = require('../schemas/question')
var quesModel = mongoose.model('quesModel', quesSche)

module.exports = quesModel;