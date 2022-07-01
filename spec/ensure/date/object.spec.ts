import {DateParameters} from '../../../dist/ensure/date';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {
    try {
        DateParameters({});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`instance`, () => {
    try {
        DateParameters(new Map());
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`date`, () => {
    expect(DateParameters(new globalThis.Date())).toBeInstanceOf(globalThis.Date);
});







