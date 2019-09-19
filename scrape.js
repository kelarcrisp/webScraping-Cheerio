const request = require('request');
const cheerio = require('cheerio');
// the 3 method request will take is always error, response, html
request('https://www.facebook.com/', (error, response, html) => {
   if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const mobileBg = $('fbIndex');


      // const output = mobileBg.find('h1').text();
      // const output = mobileBg.children('h1').next().text();
      //  const output = mobileBg.find('h1').text();

      const output = mobileBg
         .children('h1')
         .next()
         .text()
         .parent();
      //this is running a loop to get each element
      //index and element can be named whatever but this is best practice
      $('nav-item a ').each((index, element) => {
         const item = $(element).text();
         //this will loop to find all of the links
         const link = $(element).attr('href');

      });
   }
});