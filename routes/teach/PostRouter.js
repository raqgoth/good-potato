const express = require ('express')
const router = express.Router()
const { getPosts, getPostById, createPost, updatePost, deletePost } = require ('../../controllers/teach/PostController');

router.route('/')
.get(getPosts)
.post(createPost);

router.route('/:id')
.get(getPostById)
.put(updatePost)
.delete(deletePost);

module.exports = router;
