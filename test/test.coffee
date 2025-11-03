#coffee = require('coffee-script')
#coffeeImport = require('coffee-import')
#fs = require('fs')
app=null
tests=null
it=null
useESModule=(done)->
  app=require('../app.coffee')
  tests=require('gqtest')
  it=tests.it
  done()

useESModule ()->
    it "should be able to run",(done)->
        done()

    tests.doRun()