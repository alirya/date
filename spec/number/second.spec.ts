import Second from '../../dist/number/second.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('second', () => {

    it('valid', () => {

        let millisecond = 1472502588123;

        let date = new Date(millisecond);

        let actual = Second(date);

        let expectation = Math.floor(millisecond / 1000);

        expect(expectation).toBe(actual);
    });

});