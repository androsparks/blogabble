const router = require('express').Router(),
{
    createWriter, loginWriter, getSingleWriter
} = require('../../controllers/writerControllers'),
{ getSinglePost} = require('../../controllers/postControllers'),
{getAllComments, createComment} = require('../../controllers/commentsControllers'),
{ searchSite} = require('../../controllers/searchControllers')


//*************************************** 
// GENERAL WRITER ROUTES
//*************************************** 

router.post('/api', createWriter);
router.post('/api/login', loginWriter);
router.get('/api/writer/:id', getSingleWriter)

//*************************************** 
// GENERAL POST ROUTES 
//*************************************** 

// router.get('/api/posts', getAllPosts)
router.get('/api/posts/:id', getSinglePost)

//*************************************** 
// GENERAL COMMENT ROUTES
//*************************************** 

router.get('/api/comments/post/:id', getAllComments)
router.post('/api/comments/post/:id', createComment)

//*************************************** 
// GENERAL SEARCH ROUTES
//*************************************** 

router.get('/api/search', searchSite )

module.exports = router;