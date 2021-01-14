const User = require('../models/users');

function newPicture(req,res) {
    User.findById(req.params.id, function(err, user) {
        res.render('pictures/new', {user})
    })
}

function createPicture(req,res) {
    User.findById(req.params.id, function(err, user) {
        user.pictures.push(req.body);
        user.save(function(err) {
            res.redirect(`/users/${user._id}`)
        })
    })
}

module.exports = {
  newPicture,
  createPicture
};
