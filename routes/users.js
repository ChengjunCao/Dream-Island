var router = require('express').Router();
var usersCtrl = require('../controllers/users');

router.get('/users', usersCtrl.index);
router.get('/users/community', usersCtrl.community);
router.get('/users/:id', usersCtrl.show);

router.post('/info', isLoggedIn, usersCtrl.addInfo);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;