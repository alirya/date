import Compatible from "../../../dist/ensure/compatible-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {
    try {
        Compatible({});
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`instance`, () => {
    try {
        Compatible(new Map());
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`date`, () => {
    expect(Compatible(new Date())).toBeInstanceOf(Date);
});







