import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './Blog.css';

import blog1 from '../../assets/blog-1.png';
import blog2 from '../../assets/blog-2.png';
import blog3 from '../../assets/blog-3.png';
import blog4 from '../../assets/blog-4.png';
import blog5 from '../../assets/blog-5.png';
import blog6 from '../../assets/blog-6.png';

export const blogData = [
    { id: 1, date: '25 Nov', author: 'Rachi Card', title: 'The Benefits of Vitamin D & How to Get It', img: blog1 },
    { id: 2, date: '25 Nov', author: 'Rachi Card', title: 'Our Favorite Summer Tomato Salad Recipe', img: blog2 },
    { id: 3, date: '25 Nov', author: 'Rachi Card', title: 'Giving Back to the Community Through Gardening', img: blog3 },
    { id: 4, date: '25 Nov', author: 'Rachi Card', title: 'Why Integrated Water Management Matters', img: blog4 },
    { id: 5, date: '25 Nov', author: 'Rachi Card', title: 'Everyday Fresh Fruit Juices for Healthy Body', img: blog5 },
    { id: 6, date: '25 Nov', author: 'Rachi Card', title: 'Best Way to Eat Organic Foods for Health', img: blog6 }
];

const Blog = () => {
    return (
        <div className="blog-page">
            <section className="blog-banner">
                <h1>Recent News</h1>
            </section>

            <div className="container">
                <div className="blog-grid">
                    {blogData.map((post) => (
                        <div key={post.id} className="blog-card">
                            <div className="blog-img-holder">
                                <img src={post.img} alt={post.title} />
                                <div className="blog-date">
                                    {post.date.split(' ')[0]} <br /> {post.date.split(' ')[1]}
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-author">
                                    <FaUser className="author-icon" />
                                    <span>By {post.author}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <p>Simply dummy text of the printing and typesetting industry.</p>
                                <Link to={`/blog/${post.id}`} className="read-more">
                                    Read More <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;