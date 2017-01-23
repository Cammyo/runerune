
angular.module("rangedModule",[])
  .controller("rangedController", rangedCtrl)

function rangedCtrl(){
  var range = this;
  
  range.levelExp = [
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
    171077457,188884740,200000000
  ];
  
  range.chicken = 1;
  range.cow = 1;
  range.goblin = 1;
  range.chaosDruid = 1;
  range.babyBlue = 1;
  range.greenDragon = 1;
  range.blueDragon = 1;
  range.lesserDemon = 1;
  range.ogre = 1;
  range.greaterDemon = 1;
  range.aviansie = 1;
  range.waterFiend = 1;
  
  range.rangedMonsters = [
    [range.chicken,"Chicken",1,24.9],
    [range.goblin,"Goblin",2,24.9],
    [range.cow,"Cow",4,25.5],
    [range.chaosDruid,"Chaos Druid",32,50.4],
    [range.babyBlue,"Baby Blue Dragon",44,72.6],
    [range.greenDragon,"Green Dragon",63,198],
    [range.blueDragon,"Blue Dragon",74,263],
    [range.lesserDemon,"Lesser Demon",70,250.2],
    [range.ogre,"Ogre",63,227.7],
    [range.greaterDemon,"Greater Demon",82,385.2],
    [range.aviansie,"Aviansie",92,491.8],
    [range.waterFiend,"Waterfiend",107,934.2],
  ];
  
  
  range.countMonsters = function(currentExp, desiredLevel){
    if(currentExp, desiredLevel){
       range.chicken = Math.ceil((range.levelExp[range.desiredLevel] - range.currentExp)/range.rangedMonsters[0][3]) || 1;
       range.goblin = Math.ceil((range.levelExp[range.desiredLevel] - range.currentExp)/range.rangedMonsters[1][3]) || 1;
       range.cow = Math.ceil((range.levelExp[range.desiredLevel] - range.currentExp)/range.rangedMonsters[2][3]) || 1;
       range.chaosDruid = Math.ceil((range.levelExp[range.desiredLevel] - range.currentExp)/range.rangedMonsters[3][3]) || 1;
       range.babyBlue = Math.ceil((range.levelExp[range.desiredLevel] - range.currentExp)/range.rangedMonsters[4][3]) || 1;
       range.greenDragon = Math.ceil((range.levelExp[range.desiredLevel] - range.currentExp)/range.rangedMonsters[5][3]) || 1;
       range.blueDragon = Math.ceil((range.levelExp[range.desiredLevel] - range.currentExp)/range.rangedMonsters[6][3]) || 1;
       range.lesserDemon = Math.ceil((range.levelExp[range.desiredLevel] - range.currentExp)/range.rangedMonsters[7][3]) || 1;
       range.ogre = Math.ceil((range.levelExp[range.desiredLevel] - range.currentExp)/range.rangedMonsters[8][3]) || 1;
       range.greaterDemon = Math.ceil((range.levelExp[range.desiredLevel] - range.currentExp)/range.rangedMonsters[9][3]) || 1;
       range.aviansie = Math.ceil((range.levelExp[range.desiredLevel] - range.currentExp)/range.rangedMonsters[10][3]) || 1;
       range.waterFiend = Math.ceil((range.levelExp[range.desiredLevel] - range.currentExp)/range.rangedMonsters[11][3]) || 1;
    }
    
    range.rangedMonsters = [
      [range.chicken,"Chicken",1,24.9],
      [range.goblin,"Goblin",2,24.9],
      [range.cow,"Cow",4,25.5],
      [range.chaosDruid,"Chaos Druid",32,50.4],
      [range.babyBlue,"Baby Blue Dragon",44,72.6],
      [range.greenDragon,"Green Dragon",63,198],
      [range.blueDragon,"Blue Dragon",74,263],
      [range.lesserDemon,"Lesser Demon",70,250.2],
      [range.ogre,"Ogre",63,227.7],
      [range.greaterDemon,"Greater Demon",82,385.2],
      [range.aviansie,"Aviansie",92,491.8],
      [range.waterFiend,"Waterfiend",107,934.2],
    ];
  };
}