const Post = require('../../db/models/teach/Post')
const postCtrl = {};

// postCtrl.getPosts = async (req,res)=>{
//     const posts =  await Post.find().sort({createdAt:-1});
//     res.json(posts);
// };
postCtrl.getPosts = async (req,res) => {
    const posts = await Post.find()
    .sort({createdAt:-1})
    res.send(posts)

}

postCtrl.getPostById = async (req,res)=>{
    const post = await Post.findById(req.params.id);
    res.send(post);
};

postCtrl.createPost = async (req,res)=>{
   
    const newPost = new Post({...req.body})
    newPost.save();
    res.send(newPost);
 };


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
