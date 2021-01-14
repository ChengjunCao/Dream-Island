var router = require('express').Router();
var picturesCtrl = require('../controllers/pictures');

router.get('/users/:id/pictures/new', picturesCtrl.newPicture);
router.post('/users/:id/pictures', picturesCtrl.createPicture);


module.exports = router;