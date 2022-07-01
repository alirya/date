import AssertDate from '../assert/date';
import DateError from '../assert/throwable/date';
import Value from '@alirya/value/value';

export function DateParameters(
    value : unknown,
    error : (value:unknown)=>Error = DateError.Parameters
) : globalThis.Date {

    AssertDate(value, error);

    return value;
}


export function DateParameter(
    {
        value,
        error = DateError.Parameter
    } : Value<unknown> & {
        error : (value:unknown)=>Error
    }
) : globalThis.Date {

    return DateParameters(value, error);
}


namespace Date {
    export const Parameters = DateParameters;
    export const Parameter = DateParameter;
}
export default Date;
