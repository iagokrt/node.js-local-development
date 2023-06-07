import { expect } from 'chai'

import String from '../dev/string'

/**
 *  string
 */

describe('string', () => {
    const input = String;

    const expected = 'string'
    
    it('string should be a string', () => {
        expect(String).to.be.a('string');
    })

    it('string should be exact same string', () => {
        expect(String).to.eql(expected)
    })
})