let express = require('express');
let app = express.Router();
let indexRouter = require('../controllers');
let usersRouter = require('../controllers/users');
let diary = require('../controllers/diary');

module.exports = function(app) {
    app.route('/users').get(usersRouter.users);

};
