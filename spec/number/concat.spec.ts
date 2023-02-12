import Second from '../../dist/number/second.js';
import Concat from '../../dist/number/concat.js';
import Unit from '../../dist/record/unit.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('basic', () => {

    expect(Concat('2022-12-20 20:40:01', Unit.SECOND)).toBe(20221220204001);
    expect(Concat('2022-12-20 20:40:01', Unit.MINUTE)).toBe(202212202040);
    expect(Concat('2022-12-20 20:40:01', Unit.HOUR)).toBe(2022122020);
    expect(Concat('2022-12-20 20:40:01', Unit.DAY)).toBe(20221220);
    expect(Concat('2022-12-20 20:40:01', Unit.MONTH)).toBe(202212);
    expect(Concat('2022-12-20 20:40:01', Unit.YEAR)).toBe(2022);

});