import Compatible from '../../../dist/ensure/compatible-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    let target : Date|number|string|boolean = new Date();

    try {

        let result = Compatible(target);

        // @ts-expect-error
        let number : boolean = result;
        let date : Date|number|string = result;

    } catch (e) {

    }
});

it('unknown', () => {

    let target : Date|number|string = new Date();

    try {

        let result = Compatible(target);

        let date : Date|number|string = result;

    } catch (e) {

    }

});
