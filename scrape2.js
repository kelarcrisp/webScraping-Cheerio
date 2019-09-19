const request = require('request');
const cheerio = require('cheerio');

const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

// Write Headers
writeStream.write(`Title,Link,Date \n`)

// the 3 method request will take is always error, response, html
request('https://www.facebook.com/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);



        // this is scraping for all of the titles
        //the .replace regualar expression is just taking out all of the unnecessary space between each class
        $('post-preview').each((index, element) => {
            const title = $(element).find('.post-title')
                .text()
                .replace(/|s|s+/g, '');

            const link = $(element).find('a').attr('href');
            const date = $(element)
                .find('.post-date')
                .text()
                .replace(/,/, '');


            //Write Row to CSV
            writeStream.write(`${title}, ${llink}, ${date} \n `);
        })

    }
});