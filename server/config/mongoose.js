(function () {
    var mongoose = require('mongoose'),
        encrypt = require('../utilities/encryption');

    module.exports = function (config) {
        mongoose.connect(config.db);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'error connecting to the database...'));
        db.once('open', function callback() {
            console.log('angular db opened');
        });

        var userSchema = mongoose.Schema({
            firstName: String,
            lastName: String,
            username: String,
            salt: String,
            hash_pwd: String,
            roles: [String]
        });

        userSchema.methods = {
            authenticate: function (passwordToMatch) {
                return encrypt.hashPwd(this.salt, passwordToMatch) === this.hash_pwd;
            }
        };

        var User = mongoose.model('User', userSchema);
        User.find({}).exec(function (err, collection) {
            if (collection.length === 0) {
                var salt, hash;
                salt = encrypt.createSalt();
                hash = encrypt.hashPwd(salt, 'tim');
                User.create({
                    firstName: 'Tim',
                    lastName: 'Rayburn',
                    username: 'trayburn',
                    salt: salt,
                    hash_pwd: hash,
                    roles: ['admin']
                });
                var salt, hash;
                salt = encrypt.createSalt();
                hash = encrypt.hashPwd(salt, 'david');
                User.create({
                    firstName: 'David',
                    lastName: 'Ford',
                    username: 'dford',
                    salt: salt,
                    hash_pwd: hash,
                    roles: []
                });
                var salt, hash;
                salt = encrypt.createSalt();
                hash = encrypt.hashPwd(salt, 'kevin');
                User.create({
                    firstName: 'Kevin',
                    lastName: 'Berry',
                    username: 'kberry',
                    salt: salt,
                    hash_pwd: hash,
                    roles: []
                });
            }
        })
    };
})();
