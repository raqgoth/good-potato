const express = require('express')
const router = express.Router()

const TeamRouter = require ('./TeamRouter')
const postRouter = require ('./teach/PostRouter')
const CommentRouter = require('./teach/CommentRouter') 

//notes routers
const noteRouter = require('./notes/PostRouter')
const noteCommentRouter = require('./notes/CommentRouter')
// notes routers

router.use('/team', TeamRouter)
router.use('/posts',postRouter);
router.use('/comments',CommentRouter);
router.use('/notes', noteRouter);
router.use('/notecomment', noteCommentRouter)



module.exports = router


