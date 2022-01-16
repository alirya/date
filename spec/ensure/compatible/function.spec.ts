import Compatible from '../../../dist/ensure/compatible-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`anonymous `, () => {
    try {
        Compatible(function () {});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`anonymous arrow`, () => {
    try {
        Compatible(()=>{});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`named`, () => {
    try {
        Compatible(isNaN);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});








