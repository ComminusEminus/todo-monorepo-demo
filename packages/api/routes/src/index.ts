import { Router } from "express";
import {listItemRouter} from "./todo-list-item.route.js"
import {todoListRouter} from "./todo-list.route.js"
import {userRouter} from "./user.route.js"

export const router: Router = Router();

router.use('/', listItemRouter);
router.use('/', userRouter);
router.use('/', todoListRouter);


/*
router.use('/listItem', listItemRouter);
router.use('/user', userRouter);
router.use('/todoList', todoListRouter);
*/