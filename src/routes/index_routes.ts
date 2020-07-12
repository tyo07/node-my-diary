let index_routes = require('../controllers');

module.exports = function(app) {
    app.route('/').get(index_routes.index);
};
