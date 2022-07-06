import {CompatibleParameters} from '../../../dist/ensure/compatible.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {
    try {
        CompatibleParameters('str');
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`object`, () => {
    try {
        CompatibleParameters(new String('str'));
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});


it(`compatible`, () => {

    let date = 'Monday, 29-Aug-16 20:29:48 UTC';

    expect(CompatibleParameters(date)).toBe(date);
});






