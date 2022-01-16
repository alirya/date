import Compatible from '../../../dist/ensure/compatible-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`object`, () => {
    try {
        Compatible(undefined);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});





