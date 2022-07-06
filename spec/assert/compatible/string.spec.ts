import Compatible from '../../../dist/assert/compatible.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {
    try {
        Compatible('str');
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`object`, () => {
    try {
        Compatible(new String('str'));
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`compatible `, () => {

    let value = 'Monday, 29-Aug-16 20:29:48 UTC';
    Compatible(value);
    expect(value).toBe(value);
});







