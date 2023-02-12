import {GreaterParameters} from '../../../dist/validator/greater.js';
import GreaterString from '../../../dist/assert/string/greater.js';
import Unit from '../../../dist/record/unit.js';


describe(`value equal to minimum`,function() {

    describe(`inclusive`,function() {

        const validator = GreaterParameters<string>( '2022-12-20 20:40:00', Unit.SECOND, true, GreaterString.Parameters);
        const validatable = validator('2022-12-20 20:40:00');

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe('2022-12-20 20:40:00');
            expect(validatable.minimum).toBe('2022-12-20 20:40:00');
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const validator = GreaterParameters<string>('2022-12-20 20:40:00', Unit.SECOND, false, GreaterString.Parameters);
        const validatable = validator('2022-12-20 20:40:00');

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe('2022-12-20 20:40:00');
            expect(validatable.minimum).toBe('2022-12-20 20:40:00');
            expect(validatable.inclusive).toBeFalse();

        });
    });
});

describe(`value greater to minimum`,function() {

    describe(`inclusive`,function() {

        const validator = GreaterParameters<string>( '2022-12-20 20:40:01', Unit.SECOND, true, GreaterString.Parameters);
        const validatable = validator('2022-12-20 20:40:02');

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe('2022-12-20 20:40:02');
            expect(validatable.minimum).toBe('2022-12-20 20:40:01');
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const validator = GreaterParameters<string>('2022-12-20 20:40:01', Unit.SECOND, false, GreaterString.Parameters);
        const validatable = validator('2022-12-20 20:40:02');

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe('2022-12-20 20:40:02');
            expect(validatable.minimum).toBe('2022-12-20 20:40:01');
            expect(validatable.inclusive).toBeFalse();

        });
    });
});

describe(`value lower to minimum`,function() {

    describe(`inclusive`,function() {

        const validator = GreaterParameters<string>('2022-12-20 20:40:01', Unit.SECOND, true, GreaterString.Parameters);
        const validatable = validator('2022-12-20 20:40:00');

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe('2022-12-20 20:40:00');
            expect(validatable.minimum).toBe('2022-12-20 20:40:01');
            expect(validatable.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const validator = GreaterParameters<string>('2022-12-20 20:40:01', Unit.SECOND, false, GreaterString.Parameters);
        const validatable = validator('2022-12-20 20:40:00');

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe('2022-12-20 20:40:00');
            expect(validatable.minimum).toBe('2022-12-20 20:40:01');
            expect(validatable.inclusive).toBeFalse();

        });
    });
});
