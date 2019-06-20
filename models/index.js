// const mongoose = require('mongoose');
// mongoose.set('debug', true); // enable logging collection methods + arguments to the console
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/vote');

// module.exports.User = require('./user');
// module.exports.Poll = require('./poll');


const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.database);

module.exports.User = require('./user');
module.exports.Poll = require('./poll');