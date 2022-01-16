import Assert from '../../../dist/assert/date';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

    try {

        Assert(true);
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});

it(`false`, () => {

    try {

        Assert(false);
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});

