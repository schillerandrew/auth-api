'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { db } = require('../src/auth/models');

const testRequest = supertest(server);

let users = {
  admin: { username: 'admin', password: 'password', role: 'admin' },
  super: { username: 'super', password: 'password', role: 'super' },
  user: { username: 'user', password: 'password', role: 'user' }
}

beforeAll(async () => {
  try {
    await db.sync();
  } catch (e) {
    throw new Error(e.message);
  }
});
afterAll(async () => {
  try {
    await db.drop();
  } catch (e) {
    throw new Error(e.message);
  }
});

describe('Routes testing', () => {

  Object.keys(users).forEach(userType => {

    describe(`${userType} users at /signup and /signin`, () => {

      test('POST /signup Creates a new user and sends an object with the user and the token to the client', async () => {
        const response = await testRequest.post('/signup').send(users[userType]);
        const userObject = response.body;

        expect(response.status).toBe(201);
        expect(userObject.token).toBeDefined();
        expect(userObject.user.id).toBeDefined();
        expect(userObject.user.username).toEqual(users[userType].username);
      })

      test('POST /signin, with basic authentication headers, Logs in a user and sends an object with the user and the token to the client', async () => {
        const response = await testRequest.post('/signin').auth(users[userType].username, users[userType].password);
        const userObject = response.body;

        expect(response.status).toBe(200);
        expect(userObject.token).toBeDefined();
        expect(userObject.user.id).toBeDefined();
        expect(userObject.user.username).toEqual(users[userType].username);
      })
    })
  })
})