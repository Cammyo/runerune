var Auth = require('./controllers/controllers.auth.js'),
    Item = require('./models/models.items.js'),
    express = require('express');

module.exports = (app) => {
  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });
  
  app.get('/item-prices', (req, res)=>{
    res.sendFile('item-prices.html', {root : './public/html'});
  });
  
  app.get('/logout', Auth.logout);        // logout route + redirect

  app.post('/login', Auth.login);         // login form submission
  app.post('/register', Auth.register);   // register form submission

  app.get('/', Auth.session);
  app.use(express.static('public'));
  
  app.get('/itemdata', (req, res) => {
    Item.findOne({}, (err, items)=>{
      res.send(items);
    })
  })
  
};
