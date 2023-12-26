import Guard from '../boolean/date.js';
import {CallbackParameters} from '@axiona/function/assert/callback.js';
import DateError from './throwable/date.js';

export default function Date(
    value : unknown,
    error : (value:unknown)=>Error = DateError.Parameters
) : asserts value is globalThis.Date {

    CallbackParameters(value, Guard, error);
}
