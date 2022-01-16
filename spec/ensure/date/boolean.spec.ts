import Date from '../../../dist/ensure/date-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

    try {

        Date(true);
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});

it(`false`, () => {

    try {

        Date(false);
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});

