let index_routes_controller = require('../controllers');

module.exports = function(app) {
    app.route('/').get(index_routes_controller.index);
};
