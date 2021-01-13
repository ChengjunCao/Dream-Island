const User = require('../models/users');

function index(req,res) {
  console.log(req.query)
  User.find({}, function(err, users) {
    if (err) return next(err);
    res.render('index', {
      users,
      user: req.user,
      name: req.query.name,
    });
  })
}

function show(req,res) {
  User.findById(req.params.id, function(err, result) {
    res.render('users/show', {
      result,
      user: req.user,       //return userObj
      name: req.query.name
    });
  })
}

function addInfo(req,res) {
  User.findById(req.params.id, function(err, result) {
    req.user.charactername = req.body.charactername;
    req.user.islandname = req.body.islandname;
    req.user.save(function(err) {
        res.redirect('/users/' + req.user.name)
    })
  })
}

module.exports = {
  index,
  show,
  addInfo
};
