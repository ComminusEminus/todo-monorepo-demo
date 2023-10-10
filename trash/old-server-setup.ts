import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser'
import env from 'dotenv'
import {mongoDatabaseConnection} from '@storage/databases'
import { 
  listItemRouter,
  userRouter,
  todoListRouter
} from '@api/config';

import cors from 'cors'

env.config({path: '../../../.env'})

const app = express();

app.use(cookieParser())

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors({
  credentials: true,
  origin: `http://localhost:${process.env.CLIENT_PORT}`
}))

app.use((req: Request, res: Response, next: NextFunction ) => {
  console.log(req.originalUrl)
  next()
})

app.use('/listItem', listItemRouter)
app.use('/list', todoListRouter)
app.use('/user', userRouter)

app.listen(process.env.API_PORT, async () => {
  console.log(`Application started on URL http://localhost:${process.env.API_PORT}`);
});

(async () => {
  await mongoDatabaseConnection();
})()  

export { app };