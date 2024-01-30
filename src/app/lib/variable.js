
const variable = {
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/express-mongo',
    PORT: process.env.PORT || 3000,
    URL: process.env.URL || 'http://localhost:3000',
    REDIS_HOST: process.env.REDIS_HOST || 'localhost',
    REDIS_PORT: process.env.REDIS_PORT || 6379,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD || '',
};