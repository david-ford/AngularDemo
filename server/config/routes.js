var passport = require('passport');

module.exports = function(app) {
    app.get('/partials/*', function(request, response) {
        response.render('../../public/app/' + request.params[0]);
    });

    app.post('/login', function(req, res, next) {
        var auth = passport.authenticate('local', function(err, user){
            if(err) {return next(err);}
            if(!user) {res.send({success:false})}
            req.logIn(user, function(err){
                if(err) {return next(err);}
                res.send({success:true, user: user});
            })
        });
        auth(req, res, next);
    });

    app.get('*', function(request, response) {
        response.render('index');
    });
}