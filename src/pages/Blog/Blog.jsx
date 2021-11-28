import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Chip from '../../components/Common/Chip/Chip';
import EmptyList from '../../components/Common/EmptyList/EmptyList';
import { blogList } from '../../config/data';
import './Blog.css';

const Blog = () => {
    // newsapi.org API key
    const REACT_APP_API_KEY = '10176350c3e54bf9879fe76f18aefb23'
    // url to fetch data from newsapi
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-11-27&sortBy=popularity&apiKey=';

    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    const [date, setDate] = useState(new Date());
    const [article, setArticle] = useState([]);

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

    useEffect(() => {
        let blog = blogList.find((blog) => blog.id === parseInt(id));
        if (blog) {
            setBlog(blog);
        }
    }, []);

    return (
        <>
            <Link className='blog-goBack' to='/'>
                <span> &#8592;</span> <span>Go Back</span>
            </Link>
            {blog ? (
                <div className='blog-wrap'>
                    <header>
                        <p className='blog-date'>Published {blog.createdAt}</p>
                        <h1>{blog.title}</h1>
                        <div className='blog-subCategory'>
                            {blog.subCategory.map((category, i) => (
                                <div key={i}>
                                    <Chip label={category} />
                                </div>
                            ))}
                        </div>
                    </header>
                    <div className="blogBody-container">
                        {/* main */}
                        <main className="main=wrap">
                            <img src={blog.cover} alt='cover' />
                            <p className='blog-desc'>{blog.description}</p>
                        </main>
                        {/* sidebar */}
                        <nav className="nav-wrap">
                            <Link className='blog-goBack' to='/'>
                                <span className="redirect-home"> &#8592;</span> <span className="redirect-home">Home</span>
                            </Link>
                            <h3 className="apiHeader">News</h3>
                            <p className="apiSubHeader">updated at {date.toTimeString()}</p>
                            <ul className="list-wrap">
                                {
                                    article.map((article, index) => <li className="list-item" key={index}>{article}</li>)
                                }
                            </ul>
                        </nav>
                    </div>
                    <footer className="blog-footer">
                        <p>Copyright © HelloWord.com </p>
                    </footer>
                </div>
            ) : (
                <EmptyList />
            )}
        </>
    );
};

export default Blog;
