// Dependencies
import dotenv from 'dotenv';

dotenv.config();

export default {
  appName: process.env.API_NAME,
  environment: process.env.NODE_ENV,
  isProduction: process.env.NODE_ENV === 'production',
  port: process.env.API_PORT || 3000,
};
