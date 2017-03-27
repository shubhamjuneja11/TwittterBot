console.log('Bot Started');
var Twit = require('twit')
var config=require('./config');
var T = new Twit(config);

var params={
 q: 'kapil sharma', 
 count:3
}
T.get('search/tweets',params, function(err, data, response) {
  console.log(data)
})

