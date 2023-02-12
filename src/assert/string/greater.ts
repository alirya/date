import Unit from '../../record/unit.js';
import {CompareArgument, CompareParameters} from './compare.js';
import Minimum from '@alirya/number/minimum/minimum.js';
import Compatible from '../../compatible.js';
/**
 * message for greater validation
 */
export function GreaterParameters(
    value : Compatible,
    valid : boolean,
    minimum : Compatible,
    unit : Unit,
    inclusive : boolean,
    subject  = 'value'
) : string {

    return CompareParameters(
        'greater', value, valid, minimum, unit, inclusive, subject,
    );
}

export type GreaterArgument = Omit<CompareArgument, 'type'|'compare'> & Minimum<Compatible>;

/**
 * message for greater validation
 */
export function GreaterParameter(
    {
        valid,
        value,
        minimum,
        inclusive,
        subject,
        unit,
    } : GreaterArgument
) : string {

    return GreaterParameters(value, valid, minimum, unit, inclusive, subject);

}


namespace Greater {
    export const Parameters = GreaterParameters;
    export const Parameter = GreaterParameter;
    export type Argument = GreaterArgument;
}
export default Greater;
