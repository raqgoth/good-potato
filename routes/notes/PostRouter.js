const {Router} = require('express');
const router   = Router();

const { getNotes, getNotesById, createNote, updatePost, deletePost } = require ('../../controllers/notes/PostController');

router.route('/')
.get(getNotes)
.post(createNote);

router.route('/:id')
.get(getNotesById)
.put(updatePost)
.delete(deletePost);

module.exports = router;
