import Compatible from "../../../dist/ensure/compatible-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('union', () => {

    let target : Date|number|string|boolean = new Date();

    try {

        let result = Compatible(target);

        // @ts-expecerror
        let number : boolean = result;
        let date : Date|number|string = result;

    } catch (e) {

    }
});

describe('unknown', () => {

    let target : Date|number|string = new Date();

    try {

        let result = Compatible(target);

        let date : Date|number|string = result;

    } catch (e) {

    }

});
