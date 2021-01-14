var mongoose = require('mongoose');

let villagerSchema = new mongoose.Schema({
  name: String,
  birthday: String,
  species: String,
  personality: String,
  catchphrase: String,
  profilepic: String,
}, {
  timestamps: true
});

let commentSchema = new mongoose.Schema({
  content: String,
}, {
  timestamps: true
});

let pictureSchema = new mongoose.Schema({
  url: String,
  comments: [commentSchema]
}, {
  timestamps: true
});

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  charactername: String,
  islandname: String,
  villagers: [villagerSchema],
  pictures: [pictureSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);