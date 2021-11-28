import React, { useState, useEffect } from 'react';
import EmptyList from '../../components/Common/EmptyList/EmptyList';
import BlogList from '../../components/Home/BlogList/BlogList';
import Footer from '../../components/Home/Footer/Footer';
import Header from '../../components/Home/Header/Header';
import SearchBar from '../../components/Home/SearchBar/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
    // newsapi.org API key
    const REACT_APP_API_KEY = '10176350c3e54bf9879fe76f18aefb23'
    // url to fetch data from newsapi
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-11-27&sortBy=popularity&apiKey=';

    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    const [date, setDate] = useState(new Date());
    const [article, setArticle] = useState([]);

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // Search for blog by category
    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setBlogs(blogList);
        setSearchKey('');
    };

    const fetchArticles = async () => {
        try {
            const response = await fetch(
                url + REACT_APP_API_KEY
            )

            const articles = await response.json();
            // console.log(new Date(), "Articles data:", articles.articles.slice(0, 5).map(article => article.title));
            setArticle(articles.articles.slice(0, 5).map(article => article.title));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchArticles();
        const interval = setInterval(() => {
            fetchArticles();
            setDate(new Date());
        }, 5000);
        return () => clearInterval(interval);
    }, [date])

    return (
        <div>
            {/* Page header */}
            <Header />

            {/* Search Bar */}
            <SearchBar value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />

            {/* (Blog List & sidebar) & Empty View */}
            {!blogs.length ? <EmptyList /> : (
                <div style={{ display: 'grid', gridTemplateColumns: '3.2fr 0.8fr', gridGap: '2rem', width: '100%', border: 'none', padding: '10px 5px' }}>
                    <BlogList blogs={blogs} />
                    <nav style={{ border: 'none', margin: '0 auto' }}>
                        <h3>News headlines</h3>
                        <p style={{ color: "grey", fontSize: "10px" }}>updated at {date.toTimeString()}</p>
                        <ul style={{ paddingInlineStart: "0" }}>
                            {
                                article.map((article, index) => <li key={index} style={{
                                    listStyle: "none",
                                    paddingTop: "10px", paddingBottom: "10px"
                                }}>{article}</li>)
                            }
                        </ul>
                    </nav>
                </div>
            )}

            {/* Footer */}
            <Footer />
        </div>
    )
};

export default Home;