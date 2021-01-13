var router = require('express').Router();
var villagersCtrl = require('../controllers/villagers');

router.get('/users/:id/villagers/new', villagersCtrl.newVillager);
router.get('/villagers/:id', villagersCtrl.show);

router.post('/users/:id/villagers', villagersCtrl.createVillager);

module.exports = router;