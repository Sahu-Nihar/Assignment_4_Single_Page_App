const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-11-27&sortBy=popularity&apiKey=';
const API_KEY = '10176350c3e54bf9879fe76f18aefb23';

const fetchArticles = async () => {
    try {
        const response = await fetch(
            url + API_KEY
        )

        const articles = await response.json();
        // console.log(new Date(), "Articles data:", articles.articles.slice(0, 5).map(article => article.title));
        return articles.articles.slice(0, 5).map(article => article.title);
    } catch (error) {
        console.error(error);
    }
}

export default fetchArticles;