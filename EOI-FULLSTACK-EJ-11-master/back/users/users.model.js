require('mongoose');


var USERSschema = mongoose.Schema({
    id : String,
    username : String,
    name : String,
    email : String,
    tweets : Array //TO-DO no estoy seguro de si esto se hace así.
});
var USERS = mongoose.model('users', TODOschema);

module.exports =  USERS;