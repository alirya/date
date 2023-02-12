import Compatible from '../../../dist/ensure/compatible.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    const target : Date|number|string|boolean = new Date();

    try {

        const result = Compatible.Parameters(target);

        // @ts-expect-error
        const number : boolean = result;
        const date : Date|number|string = result;

    } catch (e) {

    }
});

it('unknown', () => {

    const target : Date|number|string = new Date();

    try {

        const result = Compatible.Parameters(target);

        const date : Date|number|string = result;

    } catch (e) {

    }

});
