import Date from '../../../dist/ensure/date-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    let target : undefined|number = undefined;

    try {

        let result = Date(target);

        // @ts-expect-error
        let number : number = result;
        let date : globalThis.Date = result;

    } catch (e) {

    }
});

it('unknown', () => {

    let target : unknown = undefined;

    try {

        let result = Date(target);

        let date : globalThis.Date = result;

    } catch (e) {

    }

});
