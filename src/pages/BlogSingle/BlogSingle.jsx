import React from 'react';
import { useParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { blogData } from '../Blog/Blog';
import './BlogSingle.css';

const BlogSingle = () => {
    const { id } = useParams();
    const post = blogData.find(p => p.id === parseInt(id));

    if (!post) {
        return <div className="container" style={{ padding: "100px 0" }}><h2>Post not found!</h2></div>;
    }

    return (
        <div className="blog-single-page">
            <section className="bs-header">
                <img src={post.img} alt={post.title} className="bs-banner-img" />
                <div className="container">
                    <div className="bs-info-card">
                        <div className="bs-meta">
                            <span className="bs-date"><strong>Posted On:</strong> {post.date}, 2022</span>
                            <div className="bs-author">
                                <FaUser className="bs-icon" />
                                <span>By {post.author}</span>
                            </div>
                        </div>
                        <h1>{post.title}</h1>
                        <p>Uniquely matrix economically sound throughput for resources. Key strategic initiatives focused on leadership development and digital transformation.</p>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="bs-content">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                    <h2>How to get Vitamin D?</h2>
                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>

                    <ul className="bs-list">
                        <li> Publishing packages and web pageLorem Ipsum as their default.</li>
                        <li> Content here, content here', making it look like readable</li>
                        <li> Packages and web pageLorem Ipsum as their default.</li>
                    </ul>

                    <blockquote>
                        “The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”
                    </blockquote>

                    <h3>Make the world more green</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. <br /> <br />
                        1. Publishing packages and web pageLorem Ipsum as their default <br />
                        2. Content here, content here', making it look like readable <br />
                        3. Packages and web pageLorem Ipsum as their default <br />
                        4. more-or-less normal distribution of letters
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogSingle;