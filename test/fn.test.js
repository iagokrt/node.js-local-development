import { expect } from 'chai'

import fn from '../dev/fn.js'

describe('Testing functions using javascript syntax', (options) => {
    const module = fn;
    console.log(options);
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