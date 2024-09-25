import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import blogs from '../api/blogs'; // Ensure the path is correct

const BlogPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Change this value for more or fewer items per page
    const navigate = useNavigate(); // Initialize useNavigate for back navigation

    // Calculate total pages
    const totalPages = Math.ceil(blogs.length / itemsPerPage);

    // Get current blogs to display
    const indexOfLastBlog = currentPage * itemsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Handle back navigation
    const handleBackClick = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Product Articles</h1>
            
            <button onClick={handleBackClick} style={styles.backButton}>Back</button> {/* Back Button */}

            <div style={styles.blogList}>
                {currentBlogs.map((blog) => (
                    <div key={blog.id} style={styles.blogCard}>
                        <img src={blog.image} alt={blog.name} style={styles.blogImage} />
                        <h2 style={styles.blogTitle}>{blog.name}</h2>
                        <p style={styles.blogContent}>{blog.description}</p>
                        <div style={styles.blogFooter}>
                            <span style={styles.vendor}>By {blog.vendor}</span>
                            <span style={styles.price}>₹ {blog.price.toFixed(2)}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div style={styles.pagination}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        style={currentPage === index + 1 ? styles.activePage : styles.pageButton}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#e9ecef',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '2.5rem',
        color: '#343a40',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    backButton: {
        marginBottom: '20px',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#dc3545',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '1rem',
    },
    blogList: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    blogCard: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        margin: '15px',
        padding: '20px',
        width: '300px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid #ddd',
    },
    blogImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '10px',
        marginBottom: '15px',
    },
    blogTitle: {
        fontSize: '1.8rem',
        color: '#343a40',
        marginBottom: '10px',
    },
    blogContent: {
        color: '#495057',
        marginBottom: '15px',
        lineHeight: '1.6',
    },
    blogFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        color: '#868e96',
    },
    vendor: {
        fontStyle: 'italic',
    },
    price: {
        fontWeight: 'bold',
        color: '#28a745',
    },
    pagination: {
        textAlign: 'center',
        marginTop: '20px',
    },
    pageButton: {
        margin: '0 5px',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    },
    activePage: {
        margin: '0 5px',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#0056b3',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default BlogPage;
