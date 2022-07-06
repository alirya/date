import Second from '../dist/second.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('second', () => {

    it('valid', () => {

        let actual = Second(1472502588).getTime();
        let expectation = new Date('Monday, 29-Aug-16 20:29:48 UTC').getTime();

        expect(expectation).toBe(actual);
    });

});