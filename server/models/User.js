(function () {
    var mongoose = require('mongoose'),
        encrypt = require('../utilities/encryption');

    var userSchema = mongoose.Schema({
        firstName: {type: String, required: '{PATH} is required!'},
        lastName: {type: String, required: '{PATH} is required!'},
        username: {type: String, required: '{PATH} is required!', unique: true},
        salt: {type: String, required: '{PATH} is required!'},
        hash_pwd: {type: String, required: '{PATH} is required!'},
        roles: [String]
    });

    userSchema.methods = {
        authenticate: function (passwordToMatch) {
            return encrypt.hashPwd(this.salt, passwordToMatch) === this.hash_pwd;
        },
        hasRole: function (role) {
            return this.roles.indexOf(role) > -1;
        }
    };

    var User = mongoose.model('User', userSchema);

    function createDefaultUsers() {

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
        });
    }

    exports.createDefaultUsers = createDefaultUsers;
})();
