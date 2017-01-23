angular.module("agilityModule",[])
  .controller("agilityController", agilityCtrl)

agilityCtrl.$inject = ['$scope']

function agilityCtrl($scope){
  var agil = this;
  
  agil.levelExp = [
    0,0,83,174,276,388,512,650,801,969,1154,
    1358,1584,1833,2107,2411,2746,3115,3523,
    3973,4470,5018,5624,6291,7028,7842,8740,
    9730,10824,12031,13363,14833,16456,18247,
    20224,22406,24815,27473,30408,33648,37224,
    41171,45529,50339,55649,61512,67983,75127,
    83014,91721,101333,111945,123660,136594,150872,
    166636,184040,203254,224466,247886,273742,302288,
    333804,368599,407015,449428,496254,547953,605032,
    668051,737627,814445,899257,992895,1096278,1210421,
    1336443,1475581,1629200,1798808,1986068,2192818,
    2421087,2673114,2951373,3258594,3597792,3972294,
    4385776,4842295,5346332,5902831,6517253,7195629,
    7944614,8771558,9684577,10692629,11805606,13034431,
    14391160,15889109,17542976,19368992,21385073,
    23611006,26068632,28782068,31777943,35085654,
    38737661,42769801,47221641,52136869,57563718,
    63555443,70170840,77474828,85539082,84442737,
    104273167,115126838,127110260,140341028,154848977,
    171077457,188884740
  ];
  
  agil.gnome = 1;
  agil.penguin = 1;
  agil.pyramid = 1;
  agil.barbarian = 1;
  agil.ape = 1;
  agil.wilderness = 1;
  agil.bandos = 1;
  agil.werewolf = 1;
  agil.hefin = 1;
  agil.dorgesh = 1;
  agil.advancedGnome = 1;
  agil.advancedBarbarian = 1;
  
  agil.agilityCourses = [
    [agil.gnome,"Gnome Course",1,86.5],
    [agil.penguin,"Penguin Course",30,765],
    [agil.pyramid,"Agility Pyramid",30,1622],
    [agil.barbarian,"Barbarian Course",35,155.8],
    [agil.ape,"Ape Atoll Course",48,580],
    [agil.wilderness,"Wilderness Course",52,571.5],
    [agil.bandos,"Bandos Throne Room",60,380],
    [agil.werewolf,"Werewolf Course",60,540],
    [agil.hefin,"Hefin Course",77,704],
    [agil.dorgesh,"Dorgesh-Kaan Course",80,2375],
    [agil.advancedGnome,"Advanced Gnome Course",82,725],
    [agil.advancedBarbarian,"Advanced Barbarian Course",90,751.7],
  ];
  
  
  agil.countCourses = function(currentExp, desiredLevel){
    if(currentExp, desiredLevel){
      agil.gnome = Math.ceil((agil.levelExp[agil.desiredLevel] - agil.currentExp)/agil.agilityCourses[0][3]) || 1;
       agil.penguin = Math.ceil((agil.levelExp[agil.desiredLevel] - agil.currentExp)/agil.agilityCourses[1][3]) || 1;
       agil.pyramid = Math.ceil((agil.levelExp[agil.desiredLevel] - agil.currentExp)/agil.agilityCourses[2][3]) || 1;
       agil.barbarian = Math.ceil((agil.levelExp[agil.desiredLevel] - agil.currentExp)/agil.agilityCourses[3][3]) || 1;
       agil.ape = Math.ceil((agil.levelExp[agil.desiredLevel] - agil.currentExp)/agil.agilityCourses[4][3]) || 1;
       agil.wilderness = Math.ceil((agil.levelExp[agil.desiredLevel] - agil.currentExp)/agil.agilityCourses[5][3]) || 1;
       agil.bandos = Math.ceil((agil.levelExp[agil.desiredLevel] - agil.currentExp)/agil.agilityCourses[6][3]) || 1;
       agil.werewolf = Math.ceil((agil.levelExp[agil.desiredLevel] - agil.currentExp)/agil.agilityCourses[7][3]) || 1;
       agil.hefin = Math.ceil((agil.levelExp[agil.desiredLevel] - agil.currentExp)/agil.agilityCourses[8][3]) || 1;
       agil.dorgesh = Math.ceil((agil.levelExp[agil.desiredLevel] - agil.currentExp)/agil.agilityCourses[9][3]) || 1;
       agil.advancedGnome = Math.ceil((agil.levelExp[agil.desiredLevel] - agil.currentExp)/agil.agilityCourses[10][3]) || 1;
       agil.advancedBarbarian = Math.ceil((agil.levelExp[agil.desiredLevel] - agil.currentExp)/agil.agilityCourses[11][3]) || 1;
    }
      agil.agilityCourses = [
      [agil.gnome,"Gnome Course",1,86.5],
      [agil.penguin,"Penguin Course",30,765],
      [agil.pyramid,"Agility Pyramid",30,1622],
      [agil.barbarian,"Barbarian Course",35,155.8],
      [agil.ape,"Ape Atoll Course",48,580],
      [agil.wilderness,"Wilderness Course",52,571.5],
      [agil.bandos,"Bandos Throne Room",60,380],
      [agil.werewolf,"Werewolf Course",60,540],
      [agil.hefin,"Hefin Course",77,704],
      [agil.dorgesh,"Dorgesh-Kaan Course",80,2375],
      [agil.advancedGnome,"Advanced Gnome Course",82,725],
      [agil.advancedBarbarian,"Advanced Barbarian Course",90,751.7],
    ];
  };
  

  
  
}



