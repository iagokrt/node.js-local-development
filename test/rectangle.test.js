import { expect } from 'chai'

import Rectangle from '../dev/fo/rectangle'

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
    const inputRect = {
        length: 4,
        width: 5,
    }

    const expectedRect = {
        length: 4,
        width: 5,
        perimeter: 18,
        area: 20
    }
    
    // it('Should return and Object containing rectangle properties', () => {
    //     expect(Rectangle).to.eql(rect)
    // })

    // it('Property Perimeter must be equal to sum of sides', () => {
    //     expect(Rectangle.perimeter).to.eql(expectedRect.perimeter)
    // })

    // it('Property Area must be equal to rect side multiplied by side', () => {
    //     expect(Rectangle.area).to.eql(expectedRect.area)
    // })
})