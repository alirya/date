import Compatible from '../../../dist/ensure/compatible.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {
    try {
        Compatible.Parameters(null);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});





