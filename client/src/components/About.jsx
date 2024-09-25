import React from 'react';

const AboutPage = () => {
    return (
        <div style={styles.container}>
            {/* Injecting keyframes using a style tag */}
            <style>{`
                @keyframes fadeIn {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }

                @keyframes slideIn {
                    0% { transform: translateY(50px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }

                @keyframes bounceIn {
                    0% { transform: scale(0.8); opacity: 0; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                    100% { transform: scale(1); opacity: 1; }
                }
            `}</style>

            <h1 style={styles.header}>About Us</h1>
            <div style={styles.contentWrapper}>
                <div style={styles.imageContainer}>
                    <img
                        src="https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg"
                        alt="Our Team"
                        style={styles.image}
                    />
                </div>
                <div style={styles.textContainer}>
                    <p style={styles.paragraph}>
                        Welcome to our company! We are passionate about delivering exceptional services and creating a lasting impact. 
                        With over a decade of experience, our mission is to provide innovative, reliable, and affordable solutions for everyone.
                    </p>
                    <p style={styles.paragraph}>
                        Our expert team is driven by creativity and a passion for excellence. Together, we strive to push boundaries and deliver
                        value in every project we undertake.
                    </p>
                </div>
            </div>
            <button style={styles.backButton} onClick={() => window.history.back()}>Back</button>
        </div>
    );
};

// Inline styles with enhanced animation and design
const styles = {
    container: {
        padding: '20px 20px',
        backgroundColor: '#f4f4f9',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        color: '#333',
        animation: 'fadeIn 1.2s ease-in-out',
        minHeight: '100vh',
    },
    header: {
        fontSize: '3rem',
        color: '#007BFF',
        marginBottom: '30px',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        animation: 'slideIn 1s ease-in-out',
        textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    },
    contentWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '30px',
        marginTop: '30px',
    },
    imageContainer: {
        width: '50%',
        animation: 'bounceIn 1.5s ease-in-out',
    },
    image: {
        width: '100%',
        borderRadius: '15px',
        boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    },
    textContainer: {
        width: '60%',
        animation: 'fadeIn 2s ease-in-out',
    },
    paragraph: {
        fontSize: '1.25rem',
        lineHeight: '1.8',
        color: '#555',
        marginBottom: '20px',
        textAlign: 'justify',
        padding: '0 10px',
    },
    backButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        marginTop: '20px',
    },
};

export default AboutPage;
