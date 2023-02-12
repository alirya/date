import Date from '../../../dist/ensure/date.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`anonymous `, () => {
    try {
        Date.Parameters(function () {});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`anonymous arrow`, () => {
    try {
        Date.Parameters(()=>{});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`named`, () => {
    try {
        Date.Parameters(isNaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});








