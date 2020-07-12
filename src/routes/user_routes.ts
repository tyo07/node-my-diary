let usersRouter = require('../controllers/users');

module.exports = function(app) {
    app.route('/users').get(usersRouter.users);

};
