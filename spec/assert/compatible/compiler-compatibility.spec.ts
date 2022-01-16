import Compatible from '../../../dist/assert/compatible';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('union', () => {


    let target : Date|string|number|boolean = new Date();

    try {

        Compatible(target);

        // @ts-expecerror
        let number : boolean = target;
        let compatible : Date|string|number = target;

    } catch (e) {

    }
});

describe('unknown', () => {

    let target : unknown = new Date();

    try {

        Compatible(target);

        let compatible : Date|string|number = target;

    } catch (e) {

    }

});
