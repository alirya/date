import Compatible from '../../dist/boolean/date';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('valid', () => {


    it('object', () => {

        expect(Compatible(new Date())).toBe(true);
        expect(Compatible(new Date('2020-12-16T20:24:00.000Z'))).toBe(true);
    });

});


describe('invalid', () => {

    it('valid string', () => {

        expect(Compatible('Monday, 29-Aug-16 20:29:48 UTC')).toBe(false);
        expect(Compatible('2020-12-16T20:24:00.000Z')).toBe(false);
    });

    it('string', () => {

        expect(Compatible('Monday')).toBe(false);
        expect(Compatible('20~202')).toBe(false);
    });


    it('object', () => {

        expect(Compatible(new Date('='))).toBe(false);
        expect(Compatible(new Date('?'))).toBe(false);
    });

});
