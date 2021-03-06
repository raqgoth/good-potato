const {Router} = require('express');
const router   = Router();

const { getCommentByPostId, createComment, deleteComment } = require ('../../controllers/teach/CommentController');

router.route('/')
.post(createComment);

router.route('/:id')
.get(getCommentByPostId)
.delete(deleteComment);

module.exports = router;