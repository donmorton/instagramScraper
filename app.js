var cheerio = require('cheerio');
var request = require('request');
var BASE_URL = 'https://www.instagram.com/';


var getReport = (username) => {
	
	var url = BASE_URL+username;
   
	return new Promise(function(resolve, reject) {
		request(url, function(err,resp, body){
			if(err)
				throw err;
	
			$ =  cheerio.load(body);
			var content = $('meta').eq('16').attr('content');
			content = content.replace(/,/g , '');
			var followers = content.substring(0,content.indexOf("Followers")).trim();
			var following = content.substring(content.indexOf("Followers")+9,content.indexOf("Following")).trim();
			var posts = content.substring(content.indexOf("Following")+9,content.indexOf("Posts")).trim();

			var userInfo = {
				username: username,
				followers: followers,
				following: following,
				posts: posts,
				dateRequested: Date.now() //Unix time
			};
	
			resolve(userInfo);
			
			});
	});
  }



var getPerson = async() => {
	var report = await getReport("dd0nn");
		console.log(report)
}

module.exports = getReport;