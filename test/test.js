//import app from '../app.js'
//import assert from 'assert'
//import tests from 'gqtest'

var app,tests,it;
async function useESModule() {
  app = await import('../app.js');
  tests = await import('gqtest');
}

await useESModule();

it = tests.it

it("should be able to run", function (done) {
    done()
})

tests.doRun()