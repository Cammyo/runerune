var User = require('./models/models.users')

module.exports = {
  isLoggedIn : (req, res, next) =>{
    if(req.session.uid){
      next()
    }
    else{
      res.status(403).send('You shall not pass!');
    }
  },
  
//   isAdmin : (req, res, next) =>{
//     User.findOne({_id : req.session.userID}, (err, user)=>{
      
//       if(user && (user.role > 1)){
//         next()
//       }
//       else{
//         res.status(403).send('You shall not pass!');
//       }
      
//     })
//   }
}