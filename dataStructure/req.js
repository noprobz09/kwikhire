var request = require('request');

request('http://localhost:5000', function (error, response, body) {
   if (!error && response.statusCode == 200) {
       console.log(body) // Show the HTML for the Google homepage.
   }
});
