"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _express = require("express");
var _todoListItemRoute = require("./todo-list-item.route.js");
var _todoListRoute = require("./todo-list.route.js");
var _userRoute = require("./user.route.js");
var router = (0, _express.Router)();
exports.router = router;
router.use('/', _todoListItemRoute.listItemRouter);
router.use('/', _userRoute.userRouter);
router.use('/', _todoListRoute.todoListRouter);

/*
router.use('/listItem', listItemRouter);
router.use('/user', userRouter);
router.use('/todoList', todoListRouter);
*/