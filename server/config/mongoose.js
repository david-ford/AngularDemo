var mongoose = require('mongoose'),
    crypto = require('crypto');

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
        hashed_pwd: String
    })
    var User = mongoose.model('User', userSchema);
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            var salt, hash;
            salt = createSalt();
            hash = hashPwd(salt, 'tim');
            User.create({
                firstName: 'Tim',
                lastName: 'Rayburn',
                username: 'trayburn',
                salt: salt,
                hash: hash
            });
            var salt, hash;
            salt = createSalt();
            hash = hashPwd(salt, 'david');
            User.create({
                firstName: 'David',
                lastName: 'Ford',
                username: 'dford',
                salt: salt,
                hash: hash
            });
            var salt, hash;
            salt = createSalt();
            hash = hashPwd(salt, 'kevin');
            User.create({
                firstName: 'Kevin',
                lastName: 'Berry',
                username: 'kberry',
                salt: salt,
                hash: hash
            });
        }
    })
};

function createSalt() {
    return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}