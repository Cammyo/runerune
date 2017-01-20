const SALTY_BITS = 7;

var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    UserSchema = new mongoose.Schema({
      toonName: String,
      email : {
        type: String,
        unique: true,
        required: true
      },
      password: String,
      created: {
        type: Number,
        default: () => Date.now()
      }
    });

UserSchema.pre('save', function(next) {
  var user = this;
  
  if( !user.isModified('password') ) {
    return next();
  }
  
    bcrypt.genSalt(SALTY_BITS, (saltErr, salt) => {
        if(saltErr) {
            return next(saltErr);
        }

        console.info('SALT generated!'.yellow, salt);

        bcrypt.hash(user.password, salt, (hashErr, hashedPassword) => {
            if( hashErr ) {
                return next(hashErr);
            }
            user.password = hashedPassword;
            next();
        });
    });
});

module.exports = mongoose.model('User', UserSchema);