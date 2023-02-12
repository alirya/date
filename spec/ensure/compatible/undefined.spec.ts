import Compatible from '../../../dist/ensure/compatible.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`object`, () => {
    try {
        Compatible.Parameters(undefined);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});





