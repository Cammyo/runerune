var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/########');

var item = mongoose.Schema({
  name : {type : string},
  id : {type : number},
  price : {type : number},
});




module.exports = mongoose.model("Item", item);