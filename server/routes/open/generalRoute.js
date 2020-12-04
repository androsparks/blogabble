//routes that we need 
// gneeral actions 
//can create comments 
//can create account 
//can login 
const router = require('express').Router(),
{
    createWriter, requestPasswordReset, passwordRedirect, loginWriter
} = require('../../controllers/writerControllers')

//create an account 
router.post('/api', createWriter);
router.post('/api/login', loginWriter);
router.get('/password', requestPasswordReset);
router.get('/password/:token', passwordRedirect);

module.exports = router;