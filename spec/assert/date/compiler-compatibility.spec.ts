import Assert from '../../../dist/assert/date';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('union', () => {


    let target : Date|number = new Date;

    try {

        Assert(target);

        // @ts-expect-error
        let number : number = target;
        let date : Date = target;

    } catch (e) {

    }
});

it('unknown', () => {

    let target : unknown = Date;

    try {

        Assert(target);

        let date : Date = target;

    } catch (e) {

    }

});
