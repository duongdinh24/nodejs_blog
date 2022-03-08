const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PostSchema = mongoose.Schema({
  title: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  content:{type: String},
  videoId: {type: String},
  slug: {type: String, slug:'title', unique: true},
},{ timestamps: true});

module.exports = mongoose.model('Post', PostSchema); 