require('colors');

var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan')('dev'),
    mongoose = require('mongoose').connect('mongodb://localhost/runerune', (mongooseErr) => {
        if( mongooseErr ) {
            console.error('#ERROR#'.red,'Could not initilize mongoose!', mongooseErr);
        } else {
            console.info('Mongoose initilized!'.green.bold);
        }
    }),
    sessions = require('client-sessions')({
        cookieName: '_RRAC',
        secret: '5UP3R53C3T',
        requestKey: 'session',
        duration: (86400 * 1000) * 30,
        cookie: {
            ephemeral: false,
            httpOnly: true,
            secure: false
        }
    }),
    PORT = 1337,
    Routes = require('./routes'),
    app = express();

app.use(
    logger,
    sessions,
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
  (req, res, next) =>{
    console.log(`SESSION : `, `${req.session.uid}`.rainbow);
    next();
  }
);

Routes(app);

app.listen(80, (err) => {
    if( err ) {
        console.error('#ERROR#'.red,'Could not start server! :(');
    } else {
        console.log('\nMEAN Auth Server UP!'.green.bold, 'PORT:'.yellow, PORT);
    }
});

























