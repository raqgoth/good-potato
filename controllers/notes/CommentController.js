const CommentNote = require('../../db/models/notes/CommentNote');
const commentCtrl = {};


commentCtrl.getCommentNoteByPostId = async (req,res)=>{
    const comment = await CommentNote.find()
    res.send(comment);
};

commentCtrl.createCommentNote = async (req,res)=>{
    const {author,comment,postId} = req.body;
    const newComment = new Comment({author,comment,postId});
    await newComment.save();
    res.json({message:'Comment successfully created!'});
};

commentCtrl.deleteCommentNote = async (req,res)=>{
    await  Comment.findByIdAndDelete(req.params.id);
      res.json({message:'Comment successfully deleted!'});
};

module.exports = commentCtrl;
