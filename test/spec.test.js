'use strict';

const jestOpenAPI = require('jest-openapi').default
const request = require('supertest')
const path = require('path')

jestOpenAPI(path.join(__dirname, '../oas.yaml'))
let app = require( '../src/api' )

describe('Тести для шляху "/spec"', () => {
    describe('Отримати список зареєстрованих специфікацій', () => {

        test('Повинен повернути список зареєстрованих специфікацій в форматі JSON, код відповіді - 200', async () => {
            
            let res = await request(app).get("/spec")
            expect(res.status).toEqual(200)
            expect(res).toSatisfyApiSpec()

        });
    
    });
});