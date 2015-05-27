var mongoose = require('mongoose');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'error connecting to the database...'));
    db.once('open', function callback(){
        console.log('angular db opened');
    });

    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String
    })
    var User = mongoose.model('User', userSchema);
    User.find({}).exec(function(err, collection){
        if(collection.length === 0) {
            User.create({
                firstName:'Tim',
                lastName: 'Rayburn',
                username: 'trayburn'
            });
            User.create({
                firstName:'David',
                lastName: 'Ford',
                username: 'dford'
            });
            User.create({
                firstName:'Kevin',
                lastName: 'Berry',
                username: 'kberry'
            });
        }
    })
}