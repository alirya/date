import Compatible from "../../dist/validator/compatible";
import StringMessage from "../../dist/validatable/string/compatible";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validator = new Compatible(StringMessage);
        let validatable = validator.validate(<unknown>'Monday, 29-Aug-16 20:29:48 UTC');

        if(validatable.valid) {

            // compiler pass
            let string : Date|number|string = validatable.value;
            expect(string).toBe('Monday, 29-Aug-16 20:29:48 UTC');

        } else {

            // @ts-expect-error
            let string : Date|number|string = validatable.value;
            fail('validatable.valid should false')
        }
    });

    it(`invalid value`,function() {

        let validator = new Compatible(StringMessage);
        let validatable = validator.validate({});

        if(validatable.valid) {

            // compiler pass
            let string : Date|number|string = validatable.value;
            fail('validatable.valid should false')

        } else {

            // @ts-expect-error
            let string : Date|number|string = validatable.value;
            // @ts-expect-error
            expect(string).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validator = new Compatible(StringMessage);
        let validatable = validator.validate('1');

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

    let validator = new Compatible(StringMessage);
    let validatable = validator.validate('Monday, 29-Aug-16 20:29:48 UTC');

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe('Monday, 29-Aug-16 20:29:48 UTC');
    expect(typeof validatable.message).toBe("string");

});

it(`invalid`,function() {

    let validator = new Compatible(StringMessage);
    let validatable = validator.validate('C');

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('C');
    expect(typeof validatable.message).toBe("string");

});



