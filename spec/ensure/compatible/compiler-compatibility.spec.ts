import Compatible from '../../../dist/ensure/compatible';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    let target : Date|number|string|boolean = new Date();

    try {

        let result = Compatible.Parameters(target);

        // @ts-expect-error
        let number : boolean = result;
        let date : Date|number|string = result;

    } catch (e) {

    }
});

it('unknown', () => {

    let target : Date|number|string = new Date();

    try {

        let result = Compatible.Parameters(target);

        let date : Date|number|string = result;

    } catch (e) {

    }

});
