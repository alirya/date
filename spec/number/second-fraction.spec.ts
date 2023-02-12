import SecondFraction from '../../dist/number/second-fraction.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('second fraction', () => {

    it('valid', () => {

        const millisecond = 1472502588123;

        const date = new Date(millisecond);

        const actual = SecondFraction(date);

        const expectation = millisecond / 1000;

        expect(expectation).toBe(actual);
    });

});