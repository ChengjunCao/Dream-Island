var router = require('express').Router();
var villagersCtrl = require('../controllers/villagers');

router.get('/users/:id/villagers/new', villagersCtrl.newVillager);
router.get('/villagers/:id/edit', villagersCtrl.editCatchphrase)
router.get('/villagers/:id', villagersCtrl.show);

router.post('/users/:id/villagers', villagersCtrl.createVillager);
router.put('/villagers/:id', villagersCtrl.updateCatchphrase)
router.delete('/villagers/:id', villagersCtrl.deleteVillager);

module.exports = router;