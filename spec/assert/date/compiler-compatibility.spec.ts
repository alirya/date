import Assert from "../../../dist/assert/date";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('union', () => {


    let target : Date|number = new Date;

    try {

        Assert(target);

        // @ts-expecerror
        let number : number = target;
        let date : Date = target;

    } catch (e) {

    }
});

describe('unknown', () => {

    let target : unknown = Date;

    try {

        Assert(target);

        let date : Date = target;

    } catch (e) {

    }

});
