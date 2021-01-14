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

function deletePicture(req,res) {
    let idx = req.user.pictures.findIndex(p => p.id === req.params.id)
    req.user.pictures.splice(idx, 1);
    req.user.save(function(err) {
        res.redirect(`/users/${req.user._id}`)
    })
}

function addComment(req,res) {
    User.find({}, function(err, users) {
        let result;
        users.forEach(function(user) {
            result = user.pictures.id(req.params.id);
            if (result != null) {
                result.comments.push(req.body);
                user.save(function(err) {
                    res.redirect('/users/community')
                })
            }
        })
    })
}

module.exports = {
  newPicture,
  createPicture,
  addComment,
  deletePicture
};
