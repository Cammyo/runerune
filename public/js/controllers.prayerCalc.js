angular.module("prayerModule",[])
  .controller("prayerController", prayerCtrl)

function prayerCtrl(){
  var pray = this;
  
  pray.levelExp = [
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
  
  pray.bones = 1;
  pray.monkey = 1;
  pray.accursed = 1;
  pray.bigBones = 1;
  pray.babyBones = 1;
  pray.dragonBones = 1;
  pray.raurgBones = 1;
  pray.daggBones = 1;
  pray.airutBones = 1;
  pray.infernal = 1;
  pray.searing = 1;
  pray.frostDragon = 1;
  
  pray.bonesPrice = 187;
  pray.monkeyPrice = 572;
  pray.accursedPrice = 231;
  pray.bigBonesPrice = 363;
  pray.babyBonesPrice = 627;
  pray.dragonBonesPrice = 1670;
  pray.raurgBonesPrice = 50500;
  pray.daggBonesPrice = 4965;
  pray.airutBonesPrice = 5669;
  pray.infernalPrice = 1179;
  pray.searingPrice = 30400;
  pray.frostDragonPrice = 12100;
  
  pray.prayerBones = [
    [pray.bones,"Bones",pray.bonesPrice,4.5],
    [pray.monkey,"Monkey Bones",pray.monkeyPrice,5],
    [pray.accursed,"Accursed Ashes",pray.accursedPrice,12.5],
    [pray.bigBones,"Big Bones",pray.bigBonesPrice,15],
    [pray.babyBones,"Baby dragon bones",pray.babyBonesPrice,30],
    [pray.dragonBones,"Dragon Bones",pray.dragonBonesPrice,72],
    [pray.raurgBones,"Raurg Bones",pray.raurgBonesPrice,96],
    [pray.daggBones,"Dagganoth Bones",pray.daggBonesPrice,125],
    [pray.airutBones,"Airut Bones",pray.airutBonesPrice,132.5],
    [pray.infernal,"Infernal Ashes",pray.infernalPrice,62.5],
    [pray.searing,"Searing Ashes",pray.searingPrice,200],
    [pray.frostDragon,"Frost Dragon Bones",pray.frostDragonPrice,180],
  ];
  
  pray.countBones = function(currentExp, desiredLevel){
    if(currentExp, desiredLevel){
      pray.bones = Math.ceil((pray.levelExp[pray.desiredLevel] - pray.currentExp)/pray.prayerBones[0][3]) || 1;
       pray.monkey = Math.ceil((pray.levelExp[pray.desiredLevel] - pray.currentExp)/pray.prayerBones[1][3]) || 1;
       pray.accursed = Math.ceil((pray.levelExp[pray.desiredLevel] - pray.currentExp)/pray.prayerBones[2][3]) || 1;
       pray.bigBones = Math.ceil((pray.levelExp[pray.desiredLevel] - pray.currentExp)/pray.prayerBones[3][3]) || 1;
       pray.babyBones = Math.ceil((pray.levelExp[pray.desiredLevel] - pray.currentExp)/pray.prayerBones[4][3]) || 1;
       pray.dragonBones = Math.ceil((pray.levelExp[pray.desiredLevel] - pray.currentExp)/pray.prayerBones[5][3]) || 1;
       pray.raurgBones = Math.ceil((pray.levelExp[pray.desiredLevel] - pray.currentExp)/pray.prayerBones[6][3]) || 1;
       pray.daggBones = Math.ceil((pray.levelExp[pray.desiredLevel] - pray.currentExp)/pray.prayerBones[7][3]) || 1;
       pray.airutBones = Math.ceil((pray.levelExp[pray.desiredLevel] - pray.currentExp)/pray.prayerBones[8][3]) || 1;
       pray.infernal = Math.ceil((pray.levelExp[pray.desiredLevel] - pray.currentExp)/pray.prayerBones[9][3]) || 1;
       pray.searing = Math.ceil((pray.levelExp[pray.desiredLevel] - pray.currentExp)/pray.prayerBones[10][3]) || 1;
       pray.frostDragon = Math.ceil((pray.levelExp[pray.desiredLevel] - pray.currentExp)/pray.prayerBones[11][3]) || 1;
      
       pray.bonesPrice = pray.bones * 187;
       pray.monkeyPrice = pray.monkey * 572;
       pray.accursedPrice = pray.accursed * 231;
       pray.bigBonesPrice = pray.bigBones * 363;
       pray.babyBonesPrice = pray.babyBones * 627;
       pray.dragonBonesPrice = pray.dragonBones * 1670;
       pray.raurgBonesPrice = pray.raurgBones * 50500;
       pray.daggBonesPrice = pray.daggBones * 4965;
       pray.airutBonesPrice = pray.airutBones * 5669;
       pray.infernalPrice = pray.infernal * 1179;
       pray.searingPrice = pray.searing * 30400;
       pray.frostDragonPrice = pray.frostDragon * 12100;
    }
    
    pray.prayerBones = [
      [pray.bones,"Bones",pray.bonesPrice,4.5],
      [pray.monkey,"Monkey Bones",pray.monkeyPrice,5],
      [pray.accursed,"Accursed Ashes",pray.accursedPrice,12.5],
      [pray.bigBones,"Big Bones",pray.bigBonesPrice,15],
      [pray.babyBones,"Baby dragon bones",pray.babyBonesPrice,30],
      [pray.dragonBones,"Dragon Bones",pray.dragonBonesPrice,72],
      [pray.raurgBones,"Raurg Bones",pray.raurgBonesPrice,96],
      [pray.daggBones,"Dagganoth Bones",pray.daggBonesPrice,125],
      [pray.airutBones,"Airut Bones",pray.airutBonesPrice,132.5],
      [pray.infernal,"Infernal Ashes",pray.infernalPrice,62.5],
      [pray.searing,"Searing Ashes",pray.searingPrice,200],
      [pray.frostDragon,"Frost Dragon Bones",pray.frostDragonPrice,180],
    ];
  };
}