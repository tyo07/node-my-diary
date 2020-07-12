let express = require('express');
let app = express.Router();
let index_routes = require('../controllers/index');
let usersRouter = require('../controllers/users');
let diary = require('../controllers/diary');

module.exports = function(app) {
    app.route('/').get(index_routes.index);
};
