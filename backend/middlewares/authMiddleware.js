const jwt = require('jsonwebtoken');
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ],
});

module.exports.authMiddleware = async (req, res, next) => {
    const { accessToken } = req.cookies;

    // Check if accessToken is present
    if (!accessToken) {
        logger.warn('Access token not found. User is not logged in.');
        return res.status(401).json({ error: 'Please login first' });
    }

    try {
        // Verify the token
        const decodedToken = jwt.verify(accessToken, process.env.SECRET);

        // Attach user details to request object
        req.userId = decodedToken.id;
        req.role = decodedToken.role;

        logger.info(`User ${req.userId} authenticated successfully.`);
        next(); // Call the next middleware function
    } catch (error) {
        // Log the error with additional context
        logger.error('Token verification failed:', { message: error.message, stack: error.stack });
        return res.status(403).json({ error: 'Invalid access token. Please login.' });
    }
};
