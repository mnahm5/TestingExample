const assert = require('chai').assert;
const app = require('../app');
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumber;

describe('App', function () {
    describe('sayHello', function () {
        it('sayHello should return hello', function () {
            var result = app.sayHello();
            assert.equal(result, 'hello');
        });

        it('sayHello should return a type string', function () {
            var result = app.sayHello();
            assert.typeOf(result, 'string');
        });
    });

    describe('addNumbers', function () {
        it('addNumbers should be above 5', function () {
            var result = app.addNumbers(1,1);
            assert.isAbove(result, 5);
        });
    })
});