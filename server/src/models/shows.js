/**
 * schema for 'show' collection
 * @author: Arie M. Prasetyo (2020)
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
  name: String,
  type: {type: String, default: 'TV show'},
  createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Show', ShowSchema);