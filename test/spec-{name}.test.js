'use strict';

const jestOpenAPI = require('jest-openapi').default
const request = require('supertest')
const path = require('path')
const genId = require("uuid").v4

jestOpenAPI(path.join(__dirname, '../oas.yaml'))
let app = require( '../src/api' )

const text = `
info: 
  
  title: "MOLFAR. Реєстр MSAPI-специфікацій  мікросервісів"
  
  description: "Надає доступ до MSAPI-специфікацій мікросервісів та описів повторюваного використання за назвою"
  
  version: "1.0.1"
  
  contact:
    name: "ms-registry"
    url: "http://localhost:8080/"
    email: "boldak.andrey@gmail.com"
  
  license: 
    name: "MIT License"
    url: "http://localhost:8080/license.html"
`

const testSpec = {
    name: `${genId()}.yaml`,
}

const testSpec1 = {
    name: `${genId()}.yaml`,
}

const testSpec2 = {
    name: `${genId()}.yaml`,
}


describe('Тести для шляху "/spec/{name}"',  () => {

    beforeAll( async () => {

        await request(app)
            .put(`/spec/${testSpec.name}`)
            .send(text)
            .set("Content-Type","text/plain; charset=utf-8")
            .expect(200)
        
        await request(app)
            .put(`/spec/${testSpec1.name}`)
            .send(text)
            .set("Content-Type","text/plain; charset=utf-8")
            .expect(200)
               
 
    })

    afterAll(() => Promise.all([
         request(app).delete(`/spec/${testSpec.name}`).expect(200),
         request(app).delete(`/spec/${testSpec1.name}`).expect(200),
         request(app).delete(`/spec/${testSpec2.name}`).expect(200)

        ]))

    // afterAll( async () => {

    //     jest.setTimeout(35000)
    //     await request(app).delete(`/spec/${testSpec.name}`).expect(200)
    //     await request(app).delete(`/spec/${testSpec1.name}`).expect(200)
    //     await request(app).delete(`/spec/${testSpec2.name}`).expect(200)

    
    // })

    
    describe('Отримати специфікацію', function() {
    
        test('Повинен повернути специфікацію в форматі YAML за ім\'ям, код відповіді - 200', async () => {
            
            let res = await request(app).get(`/spec/${testSpec.name}`)
            expect(res.status).toEqual(200)
            expect(res).toSatisfyApiSpec()
            
        });


        test('Повинен повернути помилку "Специфікацію не знайдено", код відповіді - 404', async () => {
            
            let res = await request(app).get(`/spec/${genId()}`)
            expect(res.status).toEqual(404)
            expect(res).toSatisfyApiSpec()
            
        });
    
    });
    
    describe('Видалити специфікацію', function() {
    
        it('Повинен видалити специфікацію за ім\'ям, код відповіді - 200', async () => {
            let res = await request(app).delete(`/spec/${testSpec1.name}`)
            expect(res.status).toEqual(200)
            
        });

    });
    
    describe('Реєстрація специфікації', function() {
        
        test('Повинен зберігти специфікацію в реєстрі та повернути її в форматі YAML, код відповіді - 200', async () => {

            let res = await request(app)
                                    .post(`/spec/${testSpec2.name}`)
                                    .send(text)
                                    .set("Content-Type","text/plain; charset=utf-8")

            expect(res.status).toEqual(200)
            expect(res).toSatisfyApiSpec()
            
        });


        test('Повинен повернути помилку "Специфікація вже існує", , код відповіді - 400',  async () => {
            
            let res = await request(app)
                                    .post(`/spec/${testSpec.name}`)
                                    .send(text)
                                    .set("Content-Type","text/plain; charset=utf-8")

            expect(res.status).toEqual(400)
            expect(res).toSatisfyApiSpec()
        });

    
    });
    
    describe('Оновити специфікацію', function() {
        
        test('Повинен оновити специфікацію в реєстрі та повернути її в форматі YAML, код відповіді - 200',  async () => {
            
            let res = await request(app)
                                    .put(`/spec/${testSpec.name}`)
                                    .send(text)
                                    .set("Content-Type","text/plain; charset=utf-8")

            expect(res.status).toEqual(200)
            expect(res).toSatisfyApiSpec()
        });
    
    });
});