import Second from '../../dist/number/second.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('second', () => {

    it('valid', () => {

        const millisecond = 1472502588123;

        const date = new Date(millisecond);

        const actual = Second(date);

        const expectation = Math.floor(millisecond / 1000);

        expect(expectation).toBe(actual);
    });

});