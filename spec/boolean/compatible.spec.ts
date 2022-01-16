import Compatible from '../../dist/boolean/compatible';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('valid', () => {

    it('string', () => {

        expect(Compatible('Monday, 29-Aug-16 20:29:48 UTC')).toBe(true);
        expect(Compatible('2020-12-16T20:24:00.000Z')).toBe(true);
    });


    it('object', () => {

        expect(Compatible(new Date())).toBe(true);
        expect(Compatible(new Date('2020-12-16T20:24:00.000Z'))).toBe(true);
    });

});


describe('ivvalid', () => {

    it('string', () => {

        expect(Compatible('Monday')).toBe(false);
        expect(Compatible('20~202')).toBe(false);
    });


    it('object', () => {

        expect(Compatible(new Date('='))).toBe(false);
        expect(Compatible(new Date('?'))).toBe(false);
    });

});