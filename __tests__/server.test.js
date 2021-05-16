'use strict';
const server = require('../server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('server',()=>{
    it('Should get welcome message',async function () {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toBe('Welcome Home');
    });

    it('should be internal error',async ()=>{
        const res = await request.get('/bad');
        expect(res.status).toEqual(500);

    })

    it('should be notFound error',async ()=>{
        const res = await request.get('/sad');
        expect(res.status).toEqual(404);
      
    });
});