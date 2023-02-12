import Compatible from '../../../dist/assert/compatible.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('union', () => {


    const target : Date|string|number|boolean = new Date();

    try {

        Compatible(target);

        // @ts-expect-error
        const number : boolean = target;
        const compatible : Date|string|number = target;

    } catch (e) {

    }
});

it('unknown', () => {

    const target : unknown = new Date();

    try {

        Compatible(target);

        const compatible : Date|string|number = target;

    } catch (e) {

    }

});
