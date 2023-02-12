import Assert from '../../../dist/assert/date.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`anonymous `, () => {
    try {
        Assert(function () {});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`anonymous arrow`, () => {
    try {
        Assert(()=>{});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`named`, () => {
    try {
        Assert(isNaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});








