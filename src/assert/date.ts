import Guard from '../boolean/date';
import {CallbackParameters} from '@alirya/function/assert/callback';
import DateError from './throwable/date';

export default function Date(
    value : unknown,
    error : (value:unknown)=>Error = DateError.Parameters
) : asserts value is globalThis.Date {

    CallbackParameters(value, Guard, error);
}
