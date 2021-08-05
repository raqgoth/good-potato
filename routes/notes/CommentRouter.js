const {Router} = require('express');
const router   = Router();

const { getCommentNoteByPostId, createCommentNote, deleteComment } = require ('../../controllers/notes/CommentController');

router.route('/')
.post(createCommentNote);

router.route('/:id')
.get(getCommentNoteByPostId)
//.delete(deleteComment);

module.exports = router;