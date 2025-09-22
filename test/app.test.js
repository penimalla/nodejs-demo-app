const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('responds with JSON message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Hello from nodejs-demo-app');
  });
});
