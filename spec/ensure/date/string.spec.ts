import Date from '../../../dist/ensure/date-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {
    try {
        Date('str');
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`object`, () => {
    try {
        Date(new String('str'));
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});






