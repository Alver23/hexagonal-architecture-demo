// Dependencies
import 'module-alias/register';
import express from 'express';

// Bootstrap
import ApiServer from '@backend/bootstrap/express-server/api';
import ExpressServer from '@backend/bootstrap/express-server/server';
import HttpServer from '@backend/bootstrap/http-server';
import MongoDatabase from '@backend/bootstrap/databases/mongo';

// Config
import config from '@backend/config';

// Commons
import { normalizePort } from '@backend/bootstrap/http-server/commons';

const basePath = '';
const port: number = normalizePort(config.port as string) as number;

const start = async () => {
  const database = new MongoDatabase();
  try {
    const expressServer = new ExpressServer(express(), port);
    const apiServer = new ApiServer(express());
    const apiServerInitialization = await apiServer.initialize();
    const server = await expressServer.initialize();
    server.use(`${basePath}/api`, apiServerInitialization);
    const httpServer = new HttpServer(server, port);
    await httpServer.initialize();
    await database.initialize();
  } catch (e) {
    console.error(e);
    database.disconnect();
    process.exit(1);
  }
};

start();
