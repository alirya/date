import Assert from '../../../dist/assert/date';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {

    try {
        Assert(1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`float`, () => {
    try {
        Assert(1.1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`infinity`, () => {

    try {
        Assert(Infinity);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`Nan`, () => {

    try {
        Assert(NaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

