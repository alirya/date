import Assert from '../../../dist/assert/date.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {
    try {
        Assert('str');
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`object`, () => {
    try {
        Assert(new String('str'));
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});






