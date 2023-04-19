import UnitEnum from '../record/unit.js';

export default function Unit(unit: UnitEnum) : string {

    switch (unit) {
        case UnitEnum.SECOND:
            return 'Second';

        case UnitEnum.MINUTE:
            return 'Minute';

        case UnitEnum.HOUR:
            return 'Hour';

        case UnitEnum.DAY:
            return 'Day';

        case UnitEnum.MONTH:
            return 'Month';

        case UnitEnum.YEAR:
            return 'Year';
    }
}