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

function show(req,res) {
    console.log(req.params.id),
    User.find({}, function(err, users, req) {
        users.forEach(function(user,req) {
            // console.log(user.villagers)
            let villagers = user.villagers;
            villagers.forEach(function(villager,req) {
                console.log(villager._id)
                if (villager._id === req.params.id) {
                    console.log(villager)
                }
            })
            // let result = villagers.find( ({_id}) => _id === req.params.id)
            // console.log(result)
        })
    })
}

module.exports = {
    newVillager,
    createVillager,
    show
}