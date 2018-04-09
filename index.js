var cheerio = require('cheerio');
var request = require('request');

var url = 'https://www.instagram.com/';
var username = 'donald_morton';


//console.log(url+username);


url = url+username;

console.log(url);

request(url, function(err,resp, body){
	if(err)
		throw err;

	$ = cheerio.load(body);

	var content = $('meta').eq('16').attr('content');
	content = content.replace(/,/g , '');
	var numbers = content.match(/\d+/g).map(Number);

	var userInfo = {
		username: username,
		followers: numbers[0],
		following: numbers[1],
		posts: numbers[2],
		dateRequested: Date.now() //Unix time
	};
		console.log("====================================================================");

	console.log(content);
	console.log(numbers);
	console.log(userInfo);

	console.log("==================================================================");
});