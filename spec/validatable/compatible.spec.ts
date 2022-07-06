import {CompatibleParameters} from '../../dist/validatable/compatible.js';
import {DateParameters} from '../../dist/assert/string/date.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validatable = CompatibleParameters(<unknown>'Monday, 29-Aug-16 20:29:48 UTC', DateParameters);

        if(validatable.valid) {

            // compiler pass
            let compatible : string|Date|number = validatable.value;
            expect(compatible).toBe('Monday, 29-Aug-16 20:29:48 UTC');

        } else {

            // @ts-expect-error
            let compatible : string|Date|number = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        let validatable = CompatibleParameters(<unknown>{}, DateParameters);

        if(validatable.valid) {

            // compiler pass
            let compatible : string|Date|number = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expect-error
            let compatible : string|Date|number = validatable.value;
            // @ts-expect-error
            expect(compatible).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validatable = CompatibleParameters(<unknown>1, DateParameters);

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

    let validatable = CompatibleParameters('Monday, 29-Aug-16 20:29:48 UTC', DateParameters);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe('Monday, 29-Aug-16 20:29:48 UTC');
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    let validatable = CompatibleParameters('1C1', DateParameters);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('1C1');
    expect(typeof validatable.message).toBe('string');

});



