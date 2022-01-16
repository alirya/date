import Compatible from '../../../dist/ensure/compatible-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {

    let date = 1;

    expect(Compatible(date)).toBe(date);
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

