angular.module('module.auth', [])
    .controller('module.auth.controller', Auth)

Auth.$inject = ['$http'];

function Auth($http) {
  var auth = this;
  
  auth.payloads = {
    login: {},
    register: {}
  };
  
  auth.login = {
    submit: function ($event) {
       $http.post('/login', auth.payloads.login)
                .then(auth.login.success, auth.login.error);
    },
    success: function(res) {
      location.href = '/'
    },
    error: function(err){
      auth.login.message = ( err.data && err.data.message ) || 'Login failed, pray to the gods for help!';
    }
  };
  auth.register = {
        submit: function () {
            $http.post('/register', auth.payloads.register)
                .then(auth.register.success, auth.register.error);
        },
        success: function(res) {
            location.href = "/";
        },
        error: function(err) {
            auth.register.message = ( err.data && err.data.message ) || 'Register failed, contact us!';
        }
  };
  
//////////////////////////////////////////////////////////////////////
// other stuff for login page goes here //////////////////////////////
  
}