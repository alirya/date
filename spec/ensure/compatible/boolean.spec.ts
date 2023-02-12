import Compatible from '../../../dist/ensure/compatible.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

    try {

        Compatible.Parameters(true);
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});

it(`false`, () => {

    try {

        Compatible.Parameters(false);
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});

