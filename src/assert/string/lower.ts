import Unit from '../../record/unit.js';
import Maximum from '@alirya/number/maximum/maximum.js';
import {CompareArgument, CompareParameters} from './compare.js';
import Compatible from '../../compatible.js';
/**
 * message for lower validation
 */

export function LowerParameters(
    value : Compatible,
    valid : boolean,
    maximum : Compatible,
    unit : Unit,
    inclusive : boolean,
    subject  = 'value'
) : string {

    return CompareParameters(
        'lower', value, valid, maximum, unit, inclusive, subject,
    );
}

export type GreaterArgument = Omit<CompareArgument, 'type'|'compare'> & Maximum<Compatible>;
/**
 * message for lower validation
 */
export function LowerParameter(
    {
        valid,
        value,
        maximum,
        inclusive,
        subject,
        unit,
    } : GreaterArgument
) : string {

    return LowerParameters(value, valid, maximum, unit, inclusive, subject);
}


namespace Lower {
    export type Argument = GreaterArgument;
    export const Parameters = LowerParameters;
    export const Parameter = LowerParameter;
}
export default Lower;
