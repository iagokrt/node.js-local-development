import { expect } from 'chai';
import leet_id_name from '../../dev/leet_id_name.js';

describe('Testing functions using JavaScript syntax', () => {
  // problem setup test
  
  const module = leet_id_name;

  describe('Test the input based on the arguments', () => {
    it('Should be a function using two parameters', () => {
      expect(module).to.be.a('function');
      expect(module.length).to.equal(2);
    });
  });

  // program test
  describe('Run test on the main program', () => {
    // Add your test cases here
  });
});