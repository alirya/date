import UnitEnum from '../record/unit.js';

export default function Unit(unit: UnitEnum) : string {

    switch (unit) {
        case UnitEnum.SECOND:
            return 'Second.js';

        case UnitEnum.MINUTE:
            return 'Minute.js';

        case UnitEnum.HOUR:
            return 'Hour.js';

        case UnitEnum.DAY:
            return 'Day.js';

        case UnitEnum.MONTH:
            return 'Month.js';

        case UnitEnum.YEAR:
            return 'Year.js';
    }
}