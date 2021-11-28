import React from 'react';
import BlogItem from './BlogItem/BlogItem';
import './BlogList.css';

const BlogList = ({ blogs }) => (
    <main className="blogList-wrap">
        {blogs.map(blog => <BlogItem blog={blog} key={blog.id}/>)}
    </main>
);

export default BlogList;
