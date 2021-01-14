const User = require('../models/users');

function newVillager(req,res) {
    User.findById(req.params.id, function(err, user) {
        res.render('villagers/new', {user})
    })
}

function createVillager(req,res) {
    User.findById(req.params.id, function(err, user) {
        user.villagers.push(req.body);
        user.save(function(err) {
            res.redirect(`/users/${user._id}`)
        })
    })
}

function deleteVillager(req,res) {
    let idx = req.user.villagers.findIndex(v => v.id === req.params.id)
    req.user.villagers.splice(idx, 1);
    req.user.save(function(err) {
        res.redirect(`/users/${req.user._id}`)
    })
}

function show(req,res) {
    let result = req.user.villagers.find(v => v.id === req.params.id)
    res.render('villagers/show', {result, user: req.user})
}

function editCatchphrase(req,res) {
    let result = req.user.villagers.find(v => v.id === req.params.id)
    res.render('villagers/edit', {result, user: req.user})
}

function updateCatchphrase(req,res) {
    let result = req.user.villagers.find(v => v.id === req.params.id)
    result.catchphrase = req.body.catchphrase;
    req.user.save(function(err) {
        res.redirect(`/villagers/${result._id}`)
    })
}

module.exports = {
    newVillager,
    createVillager,
    deleteVillager,
    show,
    editCatchphrase,
    updateCatchphrase
}