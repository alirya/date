import Compatible from '../../../dist/ensure/compatible-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {
    try {
        Compatible('str');
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`object`, () => {
    try {
        Compatible(new String('str'));
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});


it(`compatible`, () => {

    let date = 'Monday, 29-Aug-16 20:29:48 UTC';

    expect(Compatible(date)).toBe(date);
});






