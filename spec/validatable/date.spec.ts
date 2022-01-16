import Validatable from '../../dist/validatable/date-parameters';
import StringMessage from '../../dist/assert/string/date-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validatable = Validatable(<unknown>new Date, StringMessage);

        if(validatable.valid) {

            // compiler pass
            let date : Date = validatable.value;
            expect(date).toBeInstanceOf(Date);

        } else {

            // @ts-expecerror
            let date : Date = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        let validatable = Validatable(<unknown>{}, StringMessage);

        if(validatable.valid) {

            // compiler pass
            let date : Date = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expecerror
            let date : Date = validatable.value;
            // @ts-expecerror
            expect(date).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validatable = Validatable(<unknown>1, StringMessage);

        try {
            // @ts-expecerror
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expecerror
        validatable.value = true;

        try {
            // @ts-expecerror
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validatable = Validatable(new Date, StringMessage);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBeInstanceOf(Date);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    let validatable = Validatable(11, StringMessage);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(11);
    expect(typeof validatable.message).toBe('string');

});



