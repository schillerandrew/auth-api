'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { db } = require('../src/auth/models');

const testRequest = supertest(server);

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

describe('(V1) Unauthenticated API routes', () => {

  test('POST /api/v1/:model adds an item to the DB and returns an object with the added item', async () => {
    // let test = 'test';
    // expect(test).toBe('test');

    const data = {
      name: 'apple',
      calories: 30,
      type: 'fruit'
    };
    const response = await testRequest.post('/api/v1/food').send(data);

    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.id).toEqual('1');
    Objects.keys(data).forEach(key => {
      expect(response.body[key]).toEqual(data[key]);
    });
  });
});