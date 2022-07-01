import {CompatibleParameters} from '../../../dist/assert/string/compatible';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

it('true', ()=>{

    expect(CompatibleParameters({}, true, 'value')).toBe('value is compatible with Date.');

});

it('false', ()=>{

    expect(CompatibleParameters({}, false, 'value')).toBe(
        'value must compatible with Date.'
    );

});
