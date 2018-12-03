# Simple Instagram Scraper

![NPM](https://img.shields.io/npm/v/simple-instagram-scraper.svg?style=flat)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2c07192b54aa4f79b51be7aaa11eb722)](https://app.codacy.com/app/donmorton/instagramScraper?utm_source=github.com&utm_medium=referral&utm_content=donmorton/instagramScraper&utm_campaign=Badge_Grade_Dashboard)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdonmorton%2FinstagramScraper.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdonmorton%2FinstagramScraper?ref=badge_shield)

This is a simple Instagram scraper. It returns the followers, following, and posts for a certain user. 

## Usage
To use the scraper create an **async function** (or implement promises). The function will have to wait for a response
from the request to actually print something out.

Importing can be done by creating a variable and requiring the package.

```
const instagramScraper = require('simple-instagram-scraper');
```

There is only one function in this package currently and it is featured below.

```
const instagramScraper = require('simple-instagram-scraper');
let report = await instagramScraper.getReport('dd0nn'); 
```

Report will now contain an output of the results for instagram user `dd0nn`.

## Example

Below is an example of a function `testReport()`

```
const testReport = async() => {
	let report = await instagramScraper.getReport('logic');
	console.log(report)
}
```

As you can see, one can call the `getReport()` on the imported package and recieve a full report of the user.

## Output
The output contains a username, follower count, following count, post count, and timestamp based on Unix Time.

```
{ username: 'logic',
  followers: '5.3m',
  following: '346',
  posts: '1932',
  dateRequested: 1529167209700 }
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdonmorton%2FinstagramScraper.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdonmorton%2FinstagramScraper?ref=badge_large)
