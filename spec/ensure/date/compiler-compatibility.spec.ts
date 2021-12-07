import Date from "../../../dist/ensure/date-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('union', () => {

    let target : undefined|number = undefined;

    try {

        let result = Date(target);

        // @ts-expect-error
        let number : number = result;
        let date : globalThis.Date = result;

    } catch (e) {

    }
});

describe('unknown', () => {

    let target : unknown = undefined;

    try {

        let result = Date(target);

        let date : globalThis.Date = result;

    } catch (e) {

    }

});
