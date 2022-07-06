import DateString from '../../../dist/assert/string/date.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

it('true', ()=>{

    expect(DateString.Parameters( {}, true, 'value')).toBe(
        'value is instanceof Date.'
    );

});

it('false', ()=>{

    expect(DateString.Parameters( {}, false, 'value')).toBe(
        'value must instanceof Date, actual object.'
    );

});
