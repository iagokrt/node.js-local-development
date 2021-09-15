import { expect } from 'chai'

import fib from '../fibonnaci'

describe('fibonnaci', () => {
    // Must return the sum Fibonacci 
    // naive recursive algorithm
    /** fib(n):
     *  function fib(n) {
        let f;
        if (n <= 2) {
            f = 1
        }
        else {
            f = fib(n-1) + fib(n-2)
        }
        return f
        }
        // Memoization technique

        memo = {} // a dictionary

        fib(n):
            if n in memo: return memo[n]
            if n <= 2: f = 1
            else: f = fib(n-1)+ fib(n-2)
            memo[n] = f
            return f



     *  */ 

    // it('Should Input the fibonacci number on the sequence', () => {
    //     expect(Rectangle.perimeter).to.eql(expectedRect.perimeter)
    // })

})