import Assert from '../../../dist/assert/date';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {
    try {
        Assert({});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`instance`, () => {
    try {
        Assert(new Map());
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});







