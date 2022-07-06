import Compatible from '../../../dist/assert/compatible.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('union', () => {


    let target : Date|string|number|boolean = new Date();

    try {

        Compatible(target);

        // @ts-expect-error
        let number : boolean = target;
        let compatible : Date|string|number = target;

    } catch (e) {

    }
});

it('unknown', () => {

    let target : unknown = new Date();

    try {

        Compatible(target);

        let compatible : Date|string|number = target;

    } catch (e) {

    }

});
