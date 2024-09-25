import React from 'react';

const ContactPage = () => {
    return (
        <div style={styles.container}>
            {/* Keyframes for smooth animations */}
            <style>{`
                @keyframes fadeIn {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }

                @keyframes slideIn {
                    0% { transform: translateY(50px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }

                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }

                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>

            <h1 style={styles.header}>Contact Us</h1>
            <p style={styles.description}>
                We are here to help you. Get in touch with us through any of the following methods, and we will get back to you promptly!
            </p>
            <ul style={styles.contactList}>
                <li style={styles.contactItem}>
                    <strong>Email:</strong> <a href="mailto:contact@ourcompany.com" style={styles.contactLink}>contact@ourcompany.com</a>
                </li>
                <li style={styles.contactItem}>
                    <strong>Phone:</strong> <a href="tel:+919876543210" style={styles.contactLink}>+91 9876543210</a>
                </li>
                <li style={styles.contactItem}>
                    <strong>Address:</strong> Lucknow, India
                </li>
            </ul>

            <h2 style={styles.formHeader}>Send Us a Message</h2>
            <form style={styles.form}>
                <input type="text" placeholder="Your Name" style={styles.input} required />
                <input type="email" placeholder="Your Email" style={styles.input} required />
                <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
                <button type="submit" style={styles.button}>Send Message</button>
            </form>

            <button style={styles.backButton} onClick={() => window.history.back()}>Back</button>
        </div>
    );
};

// Inline styles with animation effects
const styles = {
    container: {
        padding: '50px',
        backgroundColor: '#f8f9fa',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in-out',
        backgroundImage: 'url("https://example.com/background.jpg")', // Update with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    },
    header: {
        fontSize: '2.8rem',
        color: '#17a2b8',
        marginBottom: '20px',
        textTransform: 'uppercase',
        animation: 'slideIn 1.2s ease-in-out',
    },
    description: {
        fontSize: '1.2rem',
        marginBottom: '30px',
        color: '#666',
        animation: 'fadeIn 2s ease-in-out',
        padding: '0 15px',
    },
    contactList: {
        listStyle: 'none',
        padding: 0,
        margin: '20px auto',
        width: '60%',
        textAlign: 'left',
        animation: 'fadeIn 2.5s ease-in-out',
    },
    contactItem: {
        fontSize: '1.1rem',
        marginBottom: '15px',
        padding: '10px 0',
        borderBottom: '1px solid #ccc',
        animation: 'pulse 3s infinite ease-in-out',
    },
    contactLink: {
        color: '#007BFF',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    },
    formHeader: {
        fontSize: '2rem',
        color: '#17a2b8',
        margin: '30px 0',
        animation: 'bounce 1s ease-in-out infinite',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        width: '50%',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '1rem',
        transition: 'border-color 0.3s ease',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '1rem',
        resize: 'none',
        height: '100px',
        transition: 'border-color 0.3s ease',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#17a2b8',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        marginTop: '10px',
    },
};

export default ContactPage;
