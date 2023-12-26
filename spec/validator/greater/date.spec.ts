import {GreaterParameters} from '../../../dist/validator/greater.js';
import GreaterString from '../../../dist/assert/string/greater.js';
import Unit from '../../../dist/record/unit.js';
import RandomInteger from '@axiona/number/random-integer.js';

function randomHour() : string {

    return [
        RandomInteger.Parameters(0, 23).toString().padStart(2, '0'),
        RandomInteger.Parameters(0, 59).toString().padStart(2, '0'),
        RandomInteger.Parameters(0, 59).toString().padStart(2, '0'),
    ].join(':');
}

describe(`value equal to minimum`,function() {

    describe(`inclusive`,function() {

        const value = randomHour();
        const argument = randomHour();

        const validator = GreaterParameters<string>( `2022-12-01 ${argument}`, Unit.DAY, true, GreaterString.Parameters);
        const validatable = validator(`2022-12-01 ${value}`);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(`2022-12-01 ${value}`);
            expect(validatable.minimum).toBe(`2022-12-01 ${argument}`);
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const value = randomHour();
        const argument = randomHour();

        const validator = GreaterParameters<string>(`2022-12-01 ${argument}`, Unit.DAY, false, GreaterString.Parameters);
        const validatable = validator(`2022-12-01 ${value}`);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(`2022-12-01 ${value}`);
            expect(validatable.minimum).toBe(`2022-12-01 ${argument}`);
            expect(validatable.inclusive).toBeFalse();

        });
    });
});

describe(`value greater to minimum`,function() {

    describe(`inclusive`,function() {

        const value = randomHour();
        const argument = randomHour();

        const validator = GreaterParameters<string>( `2022-12-01 ${argument}`, Unit.DAY, true, GreaterString.Parameters);
        const validatable = validator(`2022-12-02 ${value}`);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(`2022-12-02 ${value}`);
            expect(validatable.minimum).toBe(`2022-12-01 ${argument}`);
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const value = randomHour();
        const argument = randomHour();

        const validator = GreaterParameters<string>(`2022-12-01 ${argument}`, Unit.DAY, false, GreaterString.Parameters);
        const validatable = validator(`2022-12-02 ${value}`);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(`2022-12-02 ${value}`);
            expect(validatable.minimum).toBe(`2022-12-01 ${argument}`);
            expect(validatable.inclusive).toBeFalse();

        });
    });
});

describe(`value lower to minimum`,function() {

    describe(`inclusive`,function() {

        const value = randomHour();
        const argument = randomHour();

        const validator = GreaterParameters<string>(`2022-12-02 ${argument}`, Unit.DAY, true, GreaterString.Parameters);
        const validatable = validator(`2022-12-01 ${value}`);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(`2022-12-01 ${value}`);
            expect(validatable.minimum).toBe(`2022-12-02 ${argument}`);
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const value = randomHour();
        const argument = randomHour();

        const validator = GreaterParameters<string>(`2022-12-02 ${argument}`, Unit.DAY, false, GreaterString.Parameters);
        const validatable = validator(`2022-12-01 ${value}`);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(`2022-12-01 ${value}`);
            expect(validatable.minimum).toBe(`2022-12-02 ${argument}`);
            expect(validatable.inclusive).toBeFalse();

        });
    });
});
