const { app } = require('../dist/index')
const supertest = require('supertest');
const request = supertest(app);
const { User, TodoLists, TodoList, TodoListItem } = require("@api/models")
const mongoose = require("mongoose");
const { connectDB, dropDB, dropCollections } = require("./dbtestconn");
const jwt = require('jsonwebtoken');
require('dotenv').config({path: '../.env'})

let testTodoList
let testTodoListItem
let testUser
let testToken

beforeAll(async () => {
    await connectDB();
});

beforeAll(async () => {
    testUser = await User.create({ firstName: "John", lastName: "Doe", userName: "JDoe", password: "password" })
    testToken = jwt.sign({ testUser }, 'TOPSY_CRETS');
});

afterAll(async () => {
    await dropDB();
});

describe('test add new list item route and associated controllers, services and models', function() {
    test('it adds new list item and returns ok', async function() {
            const res = await request.post("/listItem/add")
                .send({
                    title: "new list item",
                    description: "the testing list item",
                    listId: "223555286032",
                    token: testToken
                })
            const parsedRes = JSON.parse(res.text)
            expect(parsedRes.message).toBe('ok')
    });
});

describe('test delete, getById and update routes', function () {
    beforeEach(async function () {
    
        testTodoList = await TodoList.create({ title: 'Test List' })
        
        testTodoListItem = await TodoListItem.create({ title: 'Test List Item', description: 'This is the test list item' })
        await TodoList.updateOne({ _id: testTodoList._id }, { $push: { listItems: testTodoListItem._id } })
        
    });
    test('it deletes list item and returns ok', async function () {
        const res = await request.post("/listItem/delete")
            .send({
                listId: testTodoList._id,
                listItemId: testTodoListItem._id,
                token: testToken
            })
        const parsedRes = JSON.parse(res.text)
        expect(parsedRes.message).toBe('ok')
    });

    test('it retrieves the correct list item title', async function () {
        const res = await request.get("/listItem/getById")
            .send({
                listItemId: testTodoListItem._id,
                token: testToken
            })
        const parsedRes = JSON.parse(res.text)
        const {listItem} = parsedRes
        const {title} = listItem
        expect(title).toBe('Test List Item')
    });

    test('it updates list item and returns ok', async function () {
        const res = await request.post("/listItem/update")
            .send({
                
                _id: testTodoListItem._id,
                title: 'Updated List Item',
                description: testTodoListItem.description,
                complete: testTodoListItem.complete,
                token: testToken
            })
        const parsedRes = JSON.parse(res.text)
        expect(parsedRes.message).toBe('ok')
    });
});
