const {app} = require('../dist/index.js')
const db = require('./db.js')
const request = require('supertest')

// Pass supertest agent for each test
const agent = request.agent(app);

// Setup connection to the database
beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());


describe('add new list item', () => {
    test('it adds new list item', function(done){
        agent.post('/listItem/add').send({title: "New List", description:"New List Item", listId: "23555"}).expect("ok").then(res => {
                expect(res.body).toBeTruthy();
                done();
            })
    });
});

