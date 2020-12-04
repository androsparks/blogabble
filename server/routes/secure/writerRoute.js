//secure 
//logout 
//update user info
//delete account 
const router = require('express').Router(),
 { getSingleWriter, uploadAvatar, updateWriter, logoutWriter, logoutAllDevices, deleteWriter, updatePassword, getCurrentWriter } = require('../../controllers/writerControllers')

//current writer 
router.get('/api/me', getCurrentWriter)
router.post('/api/me', updateWriter)
router.post('/api/logout', logoutWriter)
router.post('/api/logoutall', logoutAllDevices)
router.post('/avatar', uploadAvatar);
router.put('/api/password', updatePassword)
router.delete('/api/me', deleteWriter)

//other writers
router.get('/api/writer/:id', getSingleWriter)


module.exports = router;
