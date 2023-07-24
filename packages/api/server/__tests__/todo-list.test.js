const app = require('../dist/index.js')
const db = require('./db')
const request = require('supertest')

// Pass supertest agent for each test
const agent = request.agent(app);

// Setup connection to the database
beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());


describe('add new list', () => {
    test('it adds a new list', done => {
        agent
            .post('/todoList/add')
            .send({title: "New List", userId: "23432344"})
            .expect("ok")
            .then(res => {
                expect(res.body).toBeTruthy();
                done();
            })
    });
});

