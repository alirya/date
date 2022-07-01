import Guard from '../boolean/compatible';
import {CallbackParameters} from '@alirya/function/assert/callback';
import CompatibleError from './throwable/compatible';

export default function Compatible(
    value : unknown,
    error : (value:unknown)=>Error = CompatibleError.Parameters
) : asserts value is globalThis.Date|string|number {

    CallbackParameters(value, Guard, error);
}
