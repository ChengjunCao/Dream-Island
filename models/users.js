var mongoose = require('mongoose');

let villagerSchema = new mongoose.Schema({
  name: String,
  birthday: String,
  species: String,
  personality: String,
  profilepic: String,
})

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  charactername: String,
  islandname: String,
  villagers: [villagerSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);