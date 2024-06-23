const { writeFileSync } = require('fs');
const googleNewsScraper = require('google-news-scraper');
const getArticleContent = require('google-news-scraper/getArticleContent');
const getTitle = require('./getTitle');
const getArticleType = require('google-news-scraper/getArticleType');

async function scrapeNews() {
  try {
    const articles = await googleNewsScraper(
        { 
            searchTerm: "Raiva" ,
            getArticleContent: true,
            getTitle: true,
            getArticleType: true,
            queryVars: {
                hl:"pt-BR",
                gl:"pt-BR",
                ceid:"BR:pt"
            }
        }
    );
    // console.log(articles);
    const JSONToFile = (obj, filename) =>
    writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));
    JSONToFile(articles, 'news');
  } catch (error) {
    console.error('Error scraping news:', error);
  }
}

scrapeNews();