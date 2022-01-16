import Compatible from '../../../dist/ensure/compatible-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

    try {

        Compatible(true);
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});

it(`false`, () => {

    try {

        Compatible(false);
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});

