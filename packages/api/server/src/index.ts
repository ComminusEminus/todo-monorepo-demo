import { Request, Response, NextFunction } from 'express';
import express from 'express';
import cookieParser from 'cookie-parser'
import env from 'dotenv'
import { dbConn } from './databaseConn.js';
import { router } from '@api/routes';
import cors from 'cors'

const testVariable = false

env.config({path: '../.env'})

const app = express();

app.use(cookieParser())

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors({
  credentials: true,
  origin: 'http://localhost:9004'
}))

app.use((req, res, next) => {
  console.log(req.path)

  next()
})

app.use(router)

app.listen('3000', async () => {
  console.log(`Application started on URL http://localhost:3000`);
});

(async () => {
  await dbConn();
})()  

export { app };
