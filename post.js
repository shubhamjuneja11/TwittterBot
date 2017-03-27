var Twit = require('twit')
var config=require('./config');
var T = new Twit(config);

var tweet={
	status: '#MakingBot hello twitter'
}

T.post('statuses/update',tweet,tweeted);

function tweeted(err,data,response){
	if(err){
		console.log('Something wrong');
	}
	else{
		console.log("Tweeted");
	}
}