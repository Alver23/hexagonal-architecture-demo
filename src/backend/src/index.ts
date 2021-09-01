// Dependencies
import 'module-alias/register';
import express from 'express';

// Bootstrap
import ApiServer from '@backend/bootstrap/express-server/api';
import ExpressServer from '@backend/bootstrap/express-server/server';
import HttpServer from '@backend/bootstrap/http-server';

// Config
import config from '@backend/config';

// Commons
import { normalizePort } from '@backend/bootstrap/http-server/commons';

const basePath = '';
const port: number = normalizePort(config.port as string) as number;

const start = async () => {
  try {
    const expressServer = new ExpressServer(express(), port);
    const apiServer = new ApiServer(express());
    const apiServerInitialization = await apiServer.initialize();
    const server = await expressServer.initialize();
    server.use(`${basePath}/api`, apiServerInitialization);
    const httpServer = new HttpServer(server, port);
    await httpServer.initialize();
  } catch (e) {
    process.exit(1);
  }
};

start();
