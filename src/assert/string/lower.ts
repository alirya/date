import Unit from '../../record/unit';
import Maximum from '@alirya/number/maximum/maximum';
import {CompareArgument, CompareParameters} from './compare';
import Compatible from '../../compatible';
/**
 * message for lower validation
 */

export function LowerParameters(
    value : Compatible,
    valid : boolean,
    maximum : Compatible,
    unit : Unit,
    inclusive : boolean,
    subject : string = 'value'
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
