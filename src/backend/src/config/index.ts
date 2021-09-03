// Dependencies
import dotenv from 'dotenv';

dotenv.config();

export default {
  appName: process.env.API_NAME,
  environment: process.env.NODE_ENV,
  isProduction: process.env.NODE_ENV === 'production',
  port: process.env.API_PORT || 3000,
  database: {
    mongo: {
      auth: process.env.MONGO_AUTH,
      username: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD,
      databasaName: process.env.MONGO_INITDB_DATABASE,
      host: process.env.MONGO_HOST,
      port: process.env.MONGO_PORT,
      mongoAtlasURI: process.env.MONGO_ATLAS_URI,
    },
  },
};
