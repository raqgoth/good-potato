const Note = require('../../db/models/notes/Note')
const postCtrl = {};

// postCtrl.getPosts = async (req,res)=>{
//     const posts =  await Post.find().sort({createdAt:-1});
//     res.json(posts);
// };
postCtrl.getNotes = async (req,res) => {
    const posts = await Note.find()
    .sort({createdAt:-1})
    res.send(posts)

}

postCtrl.getNotesById = async (req,res)=>{
    const post = await Note.findById(req.params.id);
    res.send(post);
};

postCtrl.createNote = async (req,res)=>{
   
    const newNote = new Note({...req.body})
    newNote.save();
    res.send(newNote);
 }


postCtrl.updatePost = async (req,res)=>{
    const {title,content,author}=req.body;
   await  Post.findOneAndUpdate({_id:req.params.id},
        {
           title,
           content,
           author
    });
   res.json({message:'Post successfully updated!'});
};

postCtrl.deletePost = async (req,res)=>{
    await  Post.findByIdAndDelete(req.params.id);
      res.json({message:'Post successfully deleted!'});
};

module.exports = postCtrl;
