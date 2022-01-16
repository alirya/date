import Date from '../../../dist/ensure/date-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {

    try {
        Date(1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`float`, () => {
    try {
        Date(1.1);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`infinity`, () => {

    try {
        Date(Infinity);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`Nan`, () => {

    try {
        Date(NaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

