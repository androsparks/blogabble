const router = require('express').Router(),
{
    createWriter, requestPasswordReset, passwordRedirect, loginWriter
} = require('../../controllers/writerControllers'),
{ getSinglePost, getAllPosts } = require('../../controllers/postControllers'),
{getAllComments, createComment} = require('../../controllers/commentsControllers')


//*************************************** 
// GENERAL WRITER ROUTES
//*************************************** 

router.post('/api', createWriter);
router.post('/api/login', loginWriter);
router.get('/password', requestPasswordReset);
router.get('/password/:token', passwordRedirect);


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

router.get('/api/search', async (req,res)=>{
    const theQuerey = req.query.looking
    const {search} = req.query
    console.log(theQuerey, search)
    if (theQuerey === 'User') {

        //need to import writer
        await Writer.find({firstName: search})
    }
})

module.exports = router;