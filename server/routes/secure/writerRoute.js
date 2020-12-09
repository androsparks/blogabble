const router = require('express').Router(),
 { getSingleWriter, updateWriter, logoutWriter, logoutAllDevices, deleteWriter, getCurrentWriter } = require('../../controllers/writerControllers')


router.get('/api/me', getCurrentWriter)
router.post('/api/me', updateWriter)
router.post('/api/logout', logoutWriter)
router.post('/api/logoutall', logoutAllDevices)
router.delete('/api/me', deleteWriter)

//other writers
router.get('/api/writer/:id', getSingleWriter)


module.exports = router;
