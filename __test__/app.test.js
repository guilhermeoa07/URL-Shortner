const request = require('supertest')
const app = require('../app')

describe('Teste generico', ()=> {
    describe('GetById', ()=> {
        it('Should by sucess', async ()=>{
            const response = await request(app)
            .get('/url')
            .query({id: '5f4b4a6fe1d87700232f6cb2'})
            expect(response).toBe()
        })
    })
})