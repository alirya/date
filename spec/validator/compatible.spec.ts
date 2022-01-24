import Compatible from '../../dist/validator/compatible-parameters';
import StringMessage from '../../dist/assert/string/compatible-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validator = Compatible(StringMessage);
        let validatable = validator(<unknown>'Monday, 29-Aug-16 20:29:48 UTC');

        if(validatable.valid) {

            // compiler pass
            let string : Date|number|string = validatable.value;
            expect(string).toBe('Monday, 29-Aug-16 20:29:48 UTC');

        } else {

            // @ts-expect-error
            let string : Date|number|string = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        let validator = Compatible(StringMessage);
        let validatable = validator({});

        if(validatable.valid) {

            // compiler pass
            let string : Date|number|string = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expect-error
            let string : Date|number|string = validatable.value;
            // @ts-expect-error
            expect(string).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validator = Compatible(StringMessage);
        let validatable = validator('1');

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expect-error
        validatable.value = true;

        try {
            // @ts-expect-error
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validator = Compatible(StringMessage);
    let validatable = validator('Monday, 29-Aug-16 20:29:48 UTC');

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe('Monday, 29-Aug-16 20:29:48 UTC');
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    let validator = Compatible(StringMessage);
    let validatable = validator('C');

    expect<boolean>(validatable.valid).toBe(false);
    expect(validatable.value).toBe('C');
    expect(typeof validatable.message).toBe('string');

});



