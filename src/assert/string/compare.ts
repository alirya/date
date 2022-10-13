import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Unit from '../../record/unit';
import UnitToString from '../../string/unit';
import Inclusive from '../../../../number/dist/inclusive/inclusive';
import Compatible from '../../compatible';
/**
 * message for compare validation
 */

export function CompareParameters(
    type : 'lower'|'greater',
    value : Compatible,
    valid : boolean,
    compare : Compatible,
    unit : Unit,
    inclusive : boolean,
    subject : string = 'value',
) : string {

    value = new Date(value);
    compare = new Date(compare);

    let string;

    let unitString = UnitToString(unit);

    let inclusiveString = inclusive ? `${type} or equal than` : `${type} than`;

    if(valid) {

        string = `${subject} is ${inclusiveString} "${compare}" in ${unitString}.`;

    } else {

        string = `${subject} must ${inclusiveString} "${compare}" in ${unitString}, actual ${value}.`;
    }

    return string.trim();
}

export type CompareArgument = Value<Compatible> & Validatable  & Inclusive & {
    subject ?: string,
    unit : Unit,
    type : 'lower'|'greater',
    compare: Compatible
};

/**
 * message for compare validation
 */
export function CompareParameter(
    {
        valid,
        value,
        compare,
        inclusive,
        subject,
        unit,
        type,
    } : CompareArgument
) : string {

    return CompareParameters(type, value, valid, compare, unit, inclusive, subject);
}

function Compare(...args: Parameters<typeof CompareParameters>): string;
function Compare(argument: CompareArgument): string;
function Compare(argument) : string {

    if(arguments[1]) {

        return CompareParameters(...(Array.from(arguments) as Parameters<typeof CompareParameters>));

    } else {

        return CompareParameter(argument);
    }

}

namespace Compare {
    export const Parameters = CompareParameters;
    export const Parameter = CompareParameter;
    export type Argument = CompareArgument;
}
export default Compare;
