import Compatible from "../../../dist/assert/compatible";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {
    try {
        Compatible(null);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});





