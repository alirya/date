import UnitEnum from '../record/unit';
import Compatible from '../compatible';


export default function Concat(compatible: Compatible, unit: UnitEnum) : number {

    let date = new Date(compatible);

    let dates : (number|string)[] = [];

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