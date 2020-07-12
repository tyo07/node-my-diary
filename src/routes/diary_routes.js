let diary = require('../controllers/diary');

module.exports = function(app) {
    app.route('/diary/add').post(diary.add);
    app.route('/diary/edit').post(diary.edit);
    app.route('/diary/delete').post(diary.delete);

};
