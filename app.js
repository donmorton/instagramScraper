var instagramScraper = require('./simple-instagram-scraper')

var getPerson = async() => {
	var report = await instagramScraper.getReport("logic");
		console.log(report)
}

getPerson()