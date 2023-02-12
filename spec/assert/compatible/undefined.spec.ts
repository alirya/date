import Compatible from '../../../dist/assert/compatible.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`undefined `, () => {

    try {
        Compatible(undefined);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
