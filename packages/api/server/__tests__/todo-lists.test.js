const { app } = require('../dist/index')
const supertest = require('supertest');
const request = supertest(app);
const { TodoLists, TodoList, User } = require("@api/models")
const mongoose = require("mongoose");
const { connectDB, dropDB, dropCollections } = require("./dbtestconn");
const jwt = require('jsonwebtoken');
require('dotenv').config()

let testUser
let testLists
let testTodoList1
let testTodoList2
let testTodoList3
let testToken

beforeAll(async () => {
    await connectDB();
});
beforeAll(async () => {
    testUser = await User.create({ firstName: "John", lastName: "Doe", userName: "JDoe", password: "password" })
    testToken = jwt.sign({ testUser }, 'TOPSY_CRETS');
    testLists = await TodoLists.create({userId: testUser._id})
    testTodoList1 = await TodoList.create({ title: 'Test List1' })
    await TodoLists.updateOne({ _id: testUser._id }, { $push: { todoLists: testTodoList1._id } })
});

afterAll(async () => {
    await dropDB();
});



describe('test add new, delete, get by id, update routes and associated controllers, services and models', function () {
    test('it adds new list item', async function() {
        const res = await request.post("/list/add")
            .send({
                title: 'Test List',
                userId: testUser._id,
                token: testToken
            })
        const parsedRes = JSON.parse(res.text)
        expect(parsedRes.message).toBe('ok')
    });

    test('it deletes list', async function () {
        const res = await request.post("/list/delete")
            .send({
                listId: testTodoList1._id,
                userId: testUser._id,
                token: testToken
            })
        const parsedRes = JSON.parse(res.text)
        expect(parsedRes.message).toBe('ok')
    });

    test('it retrieves the correct list title', async function () {
        const res = await request.get("/list/getById")
            .send({
                listId: testTodoList1._id,
                token: testToken
            })
        const parsedRes = JSON.parse(res.text)
        const {list} = parsedRes
        const {title} = list
        
        expect(title).toBe('Test List1')
    });

    test('it return all the todo lists', async function () {
        const res = await request.get("/list/all")
            .send({
                userId: testUser.id,
                token: testToken
            })
            
        const parsedRes = JSON.parse(res.text)
        const {lists} = parsedRes
        const {todoLists} = lists
        expect(todoLists.length).toBe(1)
        
    });

});
