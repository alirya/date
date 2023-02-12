import Assert from '../../../dist/assert/date.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('union', () => {


    const target : Date|number = new Date;

    try {

        Assert(target);

        // @ts-expect-error
        const number : number = target;
        const date : Date = target;

    } catch (e) {

    }
});

it('unknown', () => {

    const target : unknown = Date;

    try {

        Assert(target);

        const date : Date = target;

    } catch (e) {

    }

});
