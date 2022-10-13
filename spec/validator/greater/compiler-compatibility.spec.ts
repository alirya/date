import {GreaterParameters} from '../../../dist/validator/greater';
import GreaterString from '../../../dist/assert/string/greater';
import Unit from '../../../dist/record/unit';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatibility`,function() {

    let validator = GreaterParameters<string>(1, Unit.DAY, false, GreaterString.Parameters);
    let validatable = validator(2);

    it('set valid', ()=>{

        try {
            // @ts-expect-error
            validatable.valid = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set value', ()=>{

        try {
            // @ts-expect-error
            validatable.value = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set minimum', ()=>{

        try {
            // @ts-expect-error
            validatable.minimum = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set inclusive', ()=>{

        try {
            // @ts-expect-error
            validatable.inclusive = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });
});
