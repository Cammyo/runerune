var fs = require('fs'),
    request = require('request'),
    mongoose = require('mongoose')


const URL_ITEMS = "http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=";

var itemObjArray = [];
var counter = 1;

// found this file at http://ix.io/1pk4 could also get with 'rs-items' script from github
var idArray = fs.readFileSync('rs-items-index.csv', 'utf-8',(err, data)=>{
  if(err){
    console.log(err);
  }
});

// odds are ids, the even before is its name
var idArray = idArray.replace(/\n/g, ",").split(","); 
// console.log(idArray[0]) returns cannonball
// console.log(idArray[1]) returns cannonball's ID of 2



function requestItemPrice(id){
  
  let url = URL_ITEMS+id;
    
  request(url, function(err, res, body){
    if (!err && res.statusCode == 200){
      
      try{
        //save to mongo w/ name , id , price
        
        let obj = JSON.parse(body);
        console.log(obj.item.current.price) //
        
        
        if (obj){
          console.log("Got "+obj.item.name+"... Adding to DB. ID was "+obj.item.id)
          counter+=2;
          
          
          
          setTimeout(requestItemPrice, 4000, idArray[counter]);
          
//           mongoose -- save as new item in db before calling api again 

          //array of objects
          
          
        } else{
          console.log("Got nothing back... wut? Where my infos at you shitty api!")
          setTimeout(requestItemPrice, 4000, id); // lets give this another shot
        }
        
      } catch (e){
        console.log(e+". Too many requests? Waiting a sec...")
        setTimeout(requestItemPrice, 1000, id)
        
      }
      
    } 
  });
}

requestItemPrice(idArray[counter]);





// ////////////////////////////////////// //
// what the json we're getting looks like
          
// {"item": 
//   {
//   "icon":"http://services.runescape.com/m=itemdb_rs/1484566274044_obj_sprite.gif?id=21787",
//   "icon_large":"http://services.runescape.com/m=itemdb_rs/1484566274044_obj_big.gif?id=21787",
//   "id":21787,
//   "type":"Miscellaneous",
//   "typeIcon":"http://www.runescape.com/img/categories/Miscellaneous",
//   "name":"Steadfast boots",
//   "description":"A pair of powerful-looking boots.",
//   "current":{"trend":"neutral","price":"11.5m"},
//   "today":{"trend":"negative","price":"- 104.4k"},
//   "members":"true","day30":{"trend":"positive","change":"+8.0%"},
//   "day90":{"trend":"positive","change":"+10.0%"},
//   "day180":{"trend":"negative","change":"-9.0%"}
//    }
// }

