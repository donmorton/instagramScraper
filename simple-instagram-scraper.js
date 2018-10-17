const cheerio = require('cheerio');
const request = require('request');
const BASE_URL = 'https://www.instagram.com/';


const getReport = (username) => {
	
	let url = BASE_URL+username;
   
	return new Promise(function(resolve, reject) {
		request(url, function(err,resp, body){
			if(err)
				throw err;
	
			$ =  cheerio.load(body);
			let content = $('meta').eq('16').attr('content');
			content = content.replace(/,/g , '');
			let followers = content.substring(0,content.indexOf("Followers")).trim();
			let following = content.substring(content.indexOf("Followers")+9,content.indexOf("Following")).trim();
			let posts = content.substring(content.indexOf("Following")+9,content.indexOf("Posts")).trim();

			let userInfo = {
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

const getPerson = async() => {
	let report = await getReport("logic");
		console.log(report)
}

module.exports = {getReport};