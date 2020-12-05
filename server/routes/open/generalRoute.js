//routes that we need 
// gneeral actions 
//can create comments 
//can create account 
//can login 
const router = require('express').Router(),
{
    createWriter, requestPasswordReset, passwordRedirect, loginWriter
} = require('../../controllers/writerControllers'),
{ getSinglePost, getAllPosts } = require('../../controllers/postControllers')


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

router.get('/api/posts', getAllPosts)
router.get('/api/posts/:id', getSinglePost)

module.exports = router;