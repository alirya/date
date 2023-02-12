import UnitEnum from '../record/unit.js';
import Compatible from '../compatible.js';


export default function Concat(compatible: Compatible, unit: UnitEnum) : number {

    const date = new Date(compatible);

    const dates : (number|string)[] = [];

    switch (unit) {

        case UnitEnum.SECOND:
            dates.unshift(ConcatPad(date.getSeconds()));

        case UnitEnum.MINUTE:
            dates.unshift(ConcatPad(date.getMinutes()));

        case UnitEnum.HOUR:
            dates.unshift(ConcatPad(date.getHours()));

        case UnitEnum.DAY:
            dates.unshift(ConcatPad(date.getDate()));

        case UnitEnum.MONTH:
            dates.unshift(ConcatPad(date.getMonth() + 1));

        case UnitEnum.YEAR:
            dates.unshift(date.getFullYear());

    }

    return parseInt(dates.join(''));

}

function ConcatPad(number: number) : string {

    return number.toString().padStart(2, '0');
}