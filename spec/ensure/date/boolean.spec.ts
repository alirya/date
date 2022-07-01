import {DateParameters} from '../../../dist/ensure/date';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

    try {

        DateParameters(true);
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});

it(`false`, () => {

    try {

        DateParameters(false);
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});

