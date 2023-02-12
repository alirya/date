import {LowerParameters} from '../../../dist/validator/lower.js';
import LowerString from '../../../dist/assert/string/lower.js';
import Unit from '../../../dist/record/unit.js';


describe(`value equal to maximum`,function() {

    describe(`inclusive`,function() {

        const validator = LowerParameters<string>( '2022-12-20 20:40:00', Unit.SECOND, true, LowerString.Parameters);
        const validatable = validator('2022-12-20 20:40:00');

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe('2022-12-20 20:40:00');
            expect(validatable.maximum).toBe('2022-12-20 20:40:00');
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const validator = LowerParameters<string>('2022-12-20 20:40:00', Unit.SECOND, false, LowerString.Parameters);
        const validatable = validator('2022-12-20 20:40:00');

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe('2022-12-20 20:40:00');
            expect(validatable.maximum).toBe('2022-12-20 20:40:00');
            expect(validatable.inclusive).toBeFalse();

        });
    });
});

describe(`value lower to maximum`,function() {

    describe(`inclusive`,function() {

        const validator = LowerParameters<string>( '2022-12-20 20:40:01', Unit.SECOND, true, LowerString.Parameters);
        const validatable = validator('2022-12-20 20:40:02');

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe('2022-12-20 20:40:02');
            expect(validatable.maximum).toBe('2022-12-20 20:40:01');
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const validator = LowerParameters<string>('2022-12-20 20:40:01', Unit.SECOND, false, LowerString.Parameters);
        const validatable = validator('2022-12-20 20:40:02');

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe('2022-12-20 20:40:02');
            expect(validatable.maximum).toBe('2022-12-20 20:40:01');
            expect(validatable.inclusive).toBeFalse();

        });
    });
});

describe(`value lower to maximum`,function() {

    describe(`inclusive`,function() {

        const validator = LowerParameters<string>('2022-12-20 20:40:01', Unit.SECOND, true, LowerString.Parameters);
        const validatable = validator('2022-12-20 20:40:00');

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe('2022-12-20 20:40:00');
            expect(validatable.maximum).toBe('2022-12-20 20:40:01');
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const validator = LowerParameters<string>('2022-12-20 20:40:01', Unit.SECOND, false, LowerString.Parameters);
        const validatable = validator('2022-12-20 20:40:00');

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe('2022-12-20 20:40:00');
            expect(validatable.maximum).toBe('2022-12-20 20:40:01');
            expect(validatable.inclusive).toBeFalse();

        });
    });
});
