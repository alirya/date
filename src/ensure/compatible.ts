import AssertCompatible from '../assert/compatible';
import CompatibleError from '../assert/throwable/compatible';
import Value from '@alirya/value/value';
import CompatibleType from '../compatible';

export function CompatibleParameters(
    value : unknown,
    error : (value:unknown)=>Error = CompatibleError.Parameters
) : CompatibleType  {

    AssertCompatible(value, error);

    return value;
}


export function CompatibleParameter(
    {
        value,
        error = CompatibleError.Parameter
    } : Value<unknown> & {
        error : (value:unknown)=>Error
    }
) : CompatibleType  {

    return CompatibleParameters(value, error);
}


namespace Compatible {
    export const Parameters = CompatibleParameters;
    export const Parameter = CompatibleParameter;
}
export default Compatible;
