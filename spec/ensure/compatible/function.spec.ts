import Compatible from '../../../dist/ensure/compatible';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`anonymous `, () => {
    try {
        Compatible.Parameters(function () {});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`anonymous arrow`, () => {
    try {
        Compatible.Parameters(()=>{});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`named`, () => {
    try {
        Compatible.Parameters(isNaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});








