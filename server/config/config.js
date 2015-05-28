(function () {
    var path = require('path');
    var rootPath = path.normalize(__dirname + '/../../')

    module.exports = {
        development: {
            rootPath: rootPath,
            db: 'mongodb://localhost/angulardb',
            port: process.env.PORT || 3030
        },
        production: {
            rootPath: rootPath,
            db: 'mongodb://dford:angapppass@ds051160.mongolab.com:51160/angulardb',
            port: process.env.PORT || 80
        }
    };
})();