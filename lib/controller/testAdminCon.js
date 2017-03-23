var quesModel = require('../model/quesModel');

exports.getted = function(req, res) {
	quesModel.fetch(function(err, quesModel) {
    if (err) {
      console.log(err)
    }
    res.render('./quesAdmin', {
      title: '题库管理',
      quesModel: quesModel
    })
  })
}
exports.posted = function(req, res) {
	var quesItem=new quesModel({
		quesbody:req.body.questBody,
		answerA:req.body.answerA,
		answerB:req.body.answerB,
		answerC:req.body.answerC,
		answerD:req.body.answerD,
	})
	quesItem.save();
	res.render('./quesAdmin');
}