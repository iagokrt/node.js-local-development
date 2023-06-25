import { expect } from 'chai'

import fn from '../dev/fo/fn.js'

describe('Testing functions using javascript syntax', () => {
    const module = fn;
    const test = fn();
    
    // problem setup test
    describe('Test the input based on the arguments', () => {
        it('Should be a function. using two parameters', () => {
            expect(module).to.be.a('function');
            expect(module.length).to.equal(2);
        });
      });

    // program test
    describe('Run test on main program', () => {
    });
})