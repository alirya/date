import Date from '../../../dist/ensure/date-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {
    try {
        Date({});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`instance`, () => {
    try {
        Date(new Map());
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`date`, () => {
    expect(Date(new globalThis.Date())).toBeInstanceOf(globalThis.Date);
});







