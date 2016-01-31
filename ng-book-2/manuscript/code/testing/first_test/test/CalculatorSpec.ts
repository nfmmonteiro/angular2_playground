/// <reference path="../typings/jasmine/jasmine.d.ts" />

import { Calculator } from '../app/Calculator';

describe('Calculator', () => {
  it('sums 1 and 1', () => {
    var calc = new Calculator();
    expect(calc.sum(1, 1)).toEqual(2);
  });

  it('subtracts 2 from 3', () => {
    var calc = new Calculator();
    expect(calc.subtract(3, 2)).toEqual(1);
  });

  it('multiplies 2 times 2', () => {
    var calc = new Calculator();
    expect(calc.multiply(2, 2)).toEqual(4);
  });

  it('divides 6 by 3', () => {
    var calc = new Calculator();
    expect(calc.divide(6, 3)).toEqual(2);
  });
});
