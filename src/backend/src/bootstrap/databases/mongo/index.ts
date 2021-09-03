// Dependencies
import mongoose from 'mongoose';
import Debug from 'debug';

import Config from '@backend/config';

// Interfaces
import { IDatabase } from '@backend/bootstrap/interfaces';

const {
  database: { mongo },
} = Config;

export default class MongoDatabase implements IDatabase {
  disconnect(): void {
    mongoose.disconnect().then();
  }

  async initialize(): Promise<any> {
    const promiseInitialize = new Promise((resolve, reject) => {
      const mongoURI = `mongodb://${mongo.username}:${mongo.password}@${mongo.host}:${mongo.port}/${mongo.databasaName}?authSource=${mongo.auth}&retryWrites=true&w=majority`;

      const mongoCallback = (error: any) => {
        if (error) {
          reject(error);
        } else {
          const message = 'Connection Database successful';
          Debug(`${Config.appName}:mongo`)(message);
          resolve(message);
        }
      };
      mongoose.connect(mongoURI, mongoCallback);
    });
    await promiseInitialize;
  }
}
