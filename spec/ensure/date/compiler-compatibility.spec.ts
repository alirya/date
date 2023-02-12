import Date from '../../../dist/ensure/date.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    const target : undefined|number = undefined;

    try {

        const result = Date.Parameters(target);

        // @ts-expect-error
        const number : number = result;
        const date : globalThis.Date = result;

    } catch (e) {

    }
});

it('unknown', () => {

    const target : unknown = undefined;

    try {

        const result = Date.Parameters(target);

        const date : globalThis.Date = result;

    } catch (e) {

    }

});
