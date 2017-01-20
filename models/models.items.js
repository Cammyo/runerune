var mongoose = require('mongoose');

var item = mongoose.Schema({
  name : {type : String},
  id : {type : Number},
  price : {type : Number},
  icon : {type : String}
});

module.exports = mongoose.model("Item", item);