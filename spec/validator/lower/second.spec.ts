import {LowerParameters} from '../../../dist/validator/lower';
import LowerString from '../../../dist/assert/string/lower';
import Unit from '../../../dist/record/unit';


describe(`value equal to maximum`,function() {

    describe(`inclusive`,function() {

        let validator = LowerParameters<string>( '2022-12-20 20:40:00', Unit.SECOND, true, LowerString.Parameters);
        let validatable = validator('2022-12-20 20:40:00');

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe('2022-12-20 20:40:00');
            expect(validatable.maximum).toBe('2022-12-20 20:40:00');
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        let validator = LowerParameters<string>('2022-12-20 20:40:00', Unit.SECOND, false, LowerString.Parameters);
        let validatable = validator('2022-12-20 20:40:00');

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

        let validator = LowerParameters<string>( '2022-12-20 20:40:01', Unit.SECOND, true, LowerString.Parameters);
        let validatable = validator('2022-12-20 20:40:02');

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe('2022-12-20 20:40:02');
            expect(validatable.maximum).toBe('2022-12-20 20:40:01');
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        let validator = LowerParameters<string>('2022-12-20 20:40:01', Unit.SECOND, false, LowerString.Parameters);
        let validatable = validator('2022-12-20 20:40:02');

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

        let validator = LowerParameters<string>('2022-12-20 20:40:01', Unit.SECOND, true, LowerString.Parameters);
        let validatable = validator('2022-12-20 20:40:00');

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe('2022-12-20 20:40:00');
            expect(validatable.maximum).toBe('2022-12-20 20:40:01');
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        let validator = LowerParameters<string>('2022-12-20 20:40:01', Unit.SECOND, false, LowerString.Parameters);
        let validatable = validator('2022-12-20 20:40:00');

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe('2022-12-20 20:40:00');
            expect(validatable.maximum).toBe('2022-12-20 20:40:01');
            expect(validatable.inclusive).toBeFalse();

        });
    });
});
