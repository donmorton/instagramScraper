# Simple Instagram Scraper
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
