var mongoose=require('mongoose');


var quesSche=new mongoose.Schema({
	quesbody:String,
	answerA:String,
	answerB:String,
	answerC:String,
	answerD:String,
	kind:String,
	power:Number,
});

quesSche.pre('save',function(next){
	console.log('question saved');
	next();
})

quesSche.statics = {
  fetch: function(cb) {
    return this
      .find({})
      .sort('kind')
      .exec(cb)
  },
  findById: function(id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  }
}

module.exports = quesSche;