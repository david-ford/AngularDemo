(function () {
    var mongoose = require('mongoose'),
        userModel = require('../models/User'),
        courseModel = require('../models/Course');

    module.exports = function (config) {
        mongoose.connect(config.db);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'error connecting to the database...'));
        db.once('open', function callback() {
            console.log('angular db opened');
        });

        userModel.createDefaultUsers();
        courseModel.createDefaultCourses();
    };
})();
