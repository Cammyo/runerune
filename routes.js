var Auth = require('./controllers/controllers.auth.js'),
    Item = require('./models/models.items.js'),
    express = require('express'),
    middleware = require('./middleware'),
    User = require('./models/models.users');


module.exports = (app) => {
  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });
  
  app.get('/signin', (req, res)=>{
    res.sendFile('signin.html', {root : './public/html'});
  });
  
  app.get('/account', middleware.isLoggedIn, (req, res)=>{
    res.sendFile('account.html', {root : './public/html'});
  });
  
  app.get('/item-prices', (req, res)=>{
    res.sendFile('item-prices.html', {root : './public/html'});
  });
  
  app.get('/calculators', (req, res)=>{
    res.sendFile('calculators.html', {root : './public/html'});
  })
  
  app.get('/calculators/agility', (req, res)=>{
    res.sendFile('calcAgility.html', {root : './public/html'});
  })
  
  app.get('/calculators/prayer', (req, res)=>{
    res.sendFile('calcPrayer.html', {root : './public/html'});
  })
  
  app.get('/calculators/ranged', (req, res)=>{
    res.sendFile('calcRanged.html', {root : './public/html'});
  })
  
  app.get('/calculators/attack', (req, res)=>{
    res.sendFile('calcAttack.html', {root : './public/html'});
  })
  
  app.get('/calculators/strength', (req, res)=>{
    res.sendFile('calcStrength.html', {root : './public/html'});
  })
  
  app.get('/calculators/magic', (req, res)=>{
    res.sendFile('calcMagic.html', {root : './public/html'});
  })
  
  app.get('/calculators/defence', (req, res)=>{
    res.sendFile('calcDefence.html', {root : './public/html'});
  })
  
  app.get('/logout', Auth.logout);        // logout route + redirect

  app.post('/login', Auth.login);         // login form submission
  app.post('/register', Auth.register);   // register form submission
  
  app.get('/api/me',(req, res)=>{
    User.findOne({_id : req.session.uid}, (err, user) =>{
      res.send(user) // send down their object
    })
  })
  
  app.get('/', Auth.session);
  app.use(express.static('public'));
  
  
  
  app.get('/itemdata', (req, res) => {
    Item.findOne({}, (err, items)=>{
      res.send(items);
    })
  })
  
};
