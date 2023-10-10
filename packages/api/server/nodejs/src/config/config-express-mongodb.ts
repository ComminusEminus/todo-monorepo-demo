import express from 'express';
import {ExpressServer} from '../repositories/express-server'
import {mongoDatabaseConnection} from '@storage/databases'
import { 
  listItemRouter,
  userRouter,
  todoListRouter
} from '@api/config';


export const expressMongoDbServer = new ExpressServer(
    express, 
    mongoDatabaseConnection, 
    listItemRouter, 
    todoListRouter,
    userRouter, 
  )