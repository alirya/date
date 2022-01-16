import Compatible from '../../../dist/assert/string/compatible-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

it('true', ()=>{

    expect(Compatible({}, true, 'value')).toBe('value is compatible with Date.');

});

it('false', ()=>{

    expect(Compatible({}, false, 'value')).toBe(
        'value must compatible with Date.'
    );

});
