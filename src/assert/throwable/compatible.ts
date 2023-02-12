import CompatibleType from '../string/compatible.js';
import Value from '@alirya/value/value.js';

export function CompatibleParameters(value : unknown, subject  = '') : Error {

    return new Error(CompatibleType.Parameters(value, false, subject));
}


export function CompatibleParameter(
    {
        value,
        subject,
    } : Value & {subject : string}
) : Error {

    return CompatibleParameters(value, subject);
}


namespace Compatible {
    export const Parameters = CompatibleParameters;
    export const Parameter = CompatibleParameter;
}
export default Compatible;
