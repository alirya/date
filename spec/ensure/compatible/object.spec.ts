import Compatible from '../../../dist/ensure/compatible.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {
    try {
        Compatible.Parameters({});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`instance`, () => {
    try {
        Compatible.Parameters(new Map());
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`date`, () => {
    expect(Compatible.Parameters(new Date())).toBeInstanceOf(Date);
});







