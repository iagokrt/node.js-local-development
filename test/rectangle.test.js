import { expect } from 'chai'

import Rectangle from '../rectangle'

/**
 *  
 * It must has two parameters:  (a, b)
 * It must return an object modeling a rectangle that has the following properties:

    length: This value is equal to .
    width: This value is equal to .
    perimeter: This value is equal to 
    area: This value is equal to 
 */

describe('rectangle', () => {
    const rect = {
        length: 4,
        width: 5,
        perimeter: 0,
        area: 0
    }
    
    it('Should return and Object containing rectangle properties', () => {
        expect(Rectangle).to.eql(rect)
    })
})