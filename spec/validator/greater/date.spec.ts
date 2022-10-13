import {GreaterParameters} from '../../../dist/validator/greater';
import GreaterString from '../../../dist/assert/string/greater';
import Unit from '../../../dist/record/unit';
import RandomInteger from '@alirya/number/random-integer';

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

        let validator = GreaterParameters<string>( `2022-12-01 ${argument}`, Unit.DAY, true, GreaterString.Parameters);
        let validatable = validator(`2022-12-01 ${value}`);

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

        let validator = GreaterParameters<string>(`2022-12-01 ${argument}`, Unit.DAY, false, GreaterString.Parameters);
        let validatable = validator(`2022-12-01 ${value}`);

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

        let validator = GreaterParameters<string>( `2022-12-01 ${argument}`, Unit.DAY, true, GreaterString.Parameters);
        let validatable = validator(`2022-12-02 ${value}`);

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

        let validator = GreaterParameters<string>(`2022-12-01 ${argument}`, Unit.DAY, false, GreaterString.Parameters);
        let validatable = validator(`2022-12-02 ${value}`);

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

        let validator = GreaterParameters<string>(`2022-12-02 ${argument}`, Unit.DAY, true, GreaterString.Parameters);
        let validatable = validator(`2022-12-01 ${value}`);

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

        let validator = GreaterParameters<string>(`2022-12-02 ${argument}`, Unit.DAY, false, GreaterString.Parameters);
        let validatable = validator(`2022-12-01 ${value}`);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(`2022-12-01 ${value}`);
            expect(validatable.minimum).toBe(`2022-12-02 ${argument}`);
            expect(validatable.inclusive).toBeFalse();

        });
    });
});
