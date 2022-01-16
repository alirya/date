import Millisecond from '../dist/millisecond';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('second', () => {

    it('valid', () => {


        let date = new Date('Monday, 29-Aug-16 20:29:48 UTC');
        let expectation = date.getTime();

        let actual = Millisecond(date.getTime()).getTime();

        expect(expectation).toBe(actual);
    });

});