angular.module("runeApp",[])
  .controller("ItemPriceController",["RuneFactory", function(runeFactory){
    
    var rune = this;
    
    rune.items = runeFactory.factInfo;
    console.log(rune.items)
    
  }]);

runeFactory.$inject = ['$http'];

angular.module("runeApp")
  .factory("RuneFactory", runeFactory);

function runeFactory($http){
  
  var factInfo = {};  
  
  $http.get('/itemdata')
    .then(function(res){
    factInfo.data = res.data;
  });
  
  return {factInfo:factInfo};
}