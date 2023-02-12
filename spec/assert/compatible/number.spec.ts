import Compatible from '../../../dist/assert/compatible.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {

    const value = 1;
    Compatible(value);
    expect(value).toBe(1);
});

it(`float`, () => {
    try {
        Compatible(1.1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`infinity`, () => {

    try {
        Compatible(Infinity);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`Nan`, () => {

    try {
        Compatible(NaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

