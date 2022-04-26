export default {
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  DB: {
    URI: process.env.DATABASE || 'mongodb://localhost:27017/example',
    USER: process.env.DB_USER || '',
    PASSWORD: process.env.DB_PASSWORD || '',
  },
};
