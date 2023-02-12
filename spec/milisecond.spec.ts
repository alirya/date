import Millisecond from '../dist/millisecond.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('second', () => {

    it('valid', () => {


        const date = new Date('Monday, 29-Aug-16 20:29:48 UTC');
        const expectation = date.getTime();

        const actual = Millisecond(date.getTime()).getTime();

        expect(expectation).toBe(actual);
    });

});