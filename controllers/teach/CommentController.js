const Comment = require('../../db/models/teach/Comment');
const commentCtrl = {};



commentCtrl.getCommentByPostId = async (req,res)=>{
    const comment = await Comment.find()
    res.send(comment);
};

commentCtrl.createComment = async (req,res)=>{
    const {author,comment,postId} = req.body;
    const newComment = new Comment({author,comment,postId});
    await newComment.save();
    res.json({message:'Comment successfully created!'});
};

commentCtrl.deleteComment = async (req,res)=>{
    await  Comment.findByIdAndDelete(req.params.id);
      res.json({message:'Comment successfully deleted!'});
};

module.exports = commentCtrl;
