const { describe } = require('mocha');
const request = require('supertest');
const app = require('../index');


describe('GET /', () => {
  it('respond with health', (done) => {
    request(app).get('/health-check').expect('health', done);
  });
});
