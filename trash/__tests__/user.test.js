const supertest = require('supertest');
const { app } = require('../dist/index')
const request = supertest(app);
const { TodoLists, TodoList, User } = require("@api/models")
const mongoose = require("mongoose");
const { connectDB, dropDB, dropCollections } = require("./dbtestconn");
const jwt = require('jsonwebtoken');

let testUser
let testToken

beforeAll(async () => {
    await connectDB();
   
});
beforeAll(async () => {

    testUser = await User.create({ firstName: "Bill", lastName: "Errie", userName: "BErr", password: "password" })
    testToken = jwt.sign({ testUser }, 'TOPSY_CRETS');
    
});
afterAll(async () => {
    await dropDB();
});

describe("test user routes", () => {
    test("creates a new user and returns ok", async () => {
        const res = await request.post("/user/createUser")
            .send({
                firstName: "John",
                lastName: "Doe",
                userName: "JDoe",
                password: "password",
            })
        const parsedRes = JSON.parse(res.text)
        expect(parsedRes.message).toBe('ok')
    })    
})


describe("test login", () => {
    test("logs user in and returns user profile and token", async () => {
        
        const res = await request.post("/user/login")
            .send({
                username: 'BErr',
                password: 'password'

            })
        const result = JSON.parse(res.text)
        
        const parsedRes = JSON.parse(res.text)
        expect(parsedRes.user.userName).toBe('BErr')
        expect(parsedRes.token).toBeDefined()
    })
})


describe("test logout", () => {
    test("returns ok after sending request", async () => {
        const loginRes = await request.post("/user/login")
            .send({
                username: 'BErr',
                password: 'password'
                
            })
        const loginCredentials = JSON.parse(loginRes.text)
        const {token} = loginCredentials
        const res = await request.post("/user/logout")
            .send({
                username: 'BErr',
                token: token
            })
        const parsedRes = JSON.parse(res.text)
        expect(parsedRes.message).toBe('ok')
    })
})

describe("test update", () => {
    test("returns ok after sending request", async () => {
        const loginRes = await request.post("/user/login")
            .send({
                username: 'BErr',
                password: 'password'
                
            })
        const loginCredentials = JSON.parse(loginRes.text)
        const {token, user} = loginCredentials
        const res = await request.post("/user/update")
            .send({
                firstName: 'Tim',
                lastName: user.lastName,
                password: user.password,
                userName: user.userName,
                _id: user._id,
                token: token
            })
        const parsedRes = JSON.parse(res.text)
        expect(parsedRes.message).toBe('ok')
    })
})







