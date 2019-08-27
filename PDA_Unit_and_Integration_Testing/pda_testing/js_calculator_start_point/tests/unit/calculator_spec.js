var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add 1 to 4 and equal 5', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    const expected = 5
    assert.equal(expected, calculator.runningTotal)
  })

  it('it should subtract 4 from 7 and equal 3', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    const expected = 3
    assert.equal(expected, calculator.runningTotal)
  })

  it('it should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    const expected = 15
    assert.equal(expected, calculator.runningTotal)
  })

  it('it should divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    const expected = 3
    assert.equal(expected, calculator.runningTotal)
  })

  it('it should concatonate multiple number button clicks', function(){
    calculator.numberClick(3)
    calculator.numberClick(5)
    const expected = 35
    assert.equal(expected, calculator.runningTotal)
  })

  it('it should chain multiple operations together', function(){
    calculator.numberClick(3)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    const expected = 5
    assert.equal(expected, calculator.runningTotal)
  })

  it('It should clear the running total without affecting the calculation - 1', function (){
    calculator.clearClick
    calculator.numberClick(3)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('=')
    calculator.clearClick
    const expected = 2
    assert.equal(expected, calculator.runningTotal)
  })

});
