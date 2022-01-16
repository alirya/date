import DateString from '../../../dist/assert/string/date-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

it('true', ()=>{

    expect(DateString( {}, true, 'value')).toBe(
        'value is instanceof Date.'
    );

});

it('false', ()=>{

    expect(DateString( {}, false, 'value')).toBe(
        'value must instanceof Date, actual object.'
    );

});
