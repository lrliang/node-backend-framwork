const { describe } = require('mocha');
const request = require('supertest');
const app = require('../index');


describe('GET /', () => {
  it('respond with OK', (done) => {
    request(app).get('/health-check').expect('OK', done);
  });
});
