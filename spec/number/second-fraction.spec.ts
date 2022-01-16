import SecondFraction from '../../dist/number/second-fraction';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('second fraction', () => {

    it('valid', () => {

        let millisecond = 1472502588123;

        let date = new Date(millisecond);

        let actual = SecondFraction(date);

        let expectation = millisecond / 1000;

        expect(expectation).toBe(actual);
    });

});