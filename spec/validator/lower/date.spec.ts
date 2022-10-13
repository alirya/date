import {LowerParameters} from '../../../dist/validator/lower';
import LowerString from '../../../dist/assert/string/lower';
import Unit from '../../../dist/record/unit';
import RandomInteger from '../../../../number/dist/random-integer';

function randomHour() : string {

    return [
        RandomInteger.Parameters(0, 23).toString().padStart(2, '0'),
        RandomInteger.Parameters(0, 59).toString().padStart(2, '0'),
        RandomInteger.Parameters(0, 59).toString().padStart(2, '0'),
    ].join(':');
}

describe(`value equal to maximum`,function() {

    describe(`inclusive`,function() {

        const value = randomHour();
        const argument = randomHour();

        let validator = LowerParameters<string>( `2022-12-01 ${argument}`, Unit.DAY, true, LowerString.Parameters);
        let validatable = validator(`2022-12-01 ${value}`);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(`2022-12-01 ${value}`);
            expect(validatable.maximum).toBe(`2022-12-01 ${argument}`);
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const value = randomHour();
        const argument = randomHour();

        let validator = LowerParameters<string>(`2022-12-01 ${argument}`, Unit.DAY, false, LowerString.Parameters);
        let validatable = validator(`2022-12-01 ${value}`);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(`2022-12-01 ${value}`);
            expect(validatable.maximum).toBe(`2022-12-01 ${argument}`);
            expect(validatable.inclusive).toBeFalse();

        });
    });
});

describe(`value lower to maximum`,function() {

    describe(`inclusive`,function() {

        const value = randomHour();
        const argument = randomHour();

        let validator = LowerParameters<string>( `2022-12-01 ${argument}`, Unit.DAY, true, LowerString.Parameters);
        let validatable = validator(`2022-12-02 ${value}`);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(`2022-12-02 ${value}`);
            expect(validatable.maximum).toBe(`2022-12-01 ${argument}`);
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const value = randomHour();
        const argument = randomHour();

        let validator = LowerParameters<string>(`2022-12-01 ${argument}`, Unit.DAY, false, LowerString.Parameters);
        let validatable = validator(`2022-12-02 ${value}`);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(`2022-12-02 ${value}`);
            expect(validatable.maximum).toBe(`2022-12-01 ${argument}`);
            expect(validatable.inclusive).toBeFalse();

        });
    });
});

describe(`value lower to maximum`,function() {

    describe(`inclusive`,function() {

        const value = randomHour();
        const argument = randomHour();

        let validator = LowerParameters<string>(`2022-12-02 ${argument}`, Unit.DAY, true, LowerString.Parameters);
        let validatable = validator(`2022-12-01 ${value}`);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(`2022-12-01 ${value}`);
            expect(validatable.maximum).toBe(`2022-12-02 ${argument}`);
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const value = randomHour();
        const argument = randomHour();

        let validator = LowerParameters<string>(`2022-12-02 ${argument}`, Unit.DAY, false, LowerString.Parameters);
        let validatable = validator(`2022-12-01 ${value}`);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(`2022-12-01 ${value}`);
            expect(validatable.maximum).toBe(`2022-12-02 ${argument}`);
            expect(validatable.inclusive).toBeFalse();

        });
    });
});
