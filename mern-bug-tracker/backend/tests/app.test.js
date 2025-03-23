const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const bugRoutes = require('../routes/bugs');

let app;
let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);

  // Create a fresh app instance for testing
  app = express();
  app.use(express.json());
  app.use('/bugs', bugRoutes);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Bug API', () => {
  test('creates a new bug', async () => {
    const res = await request(app)
      .post('/bugs')
      .send({ title: 'Test Bug', description: 'Test Desc' });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Test Bug');
  });

  test('fetches all bugs', async () => {
    await request(app).post('/bugs').send({ title: 'Bug 1', description: 'Desc 1' });
    const res = await request(app).get('/bugs');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
