import Guard from '../boolean/compatible';
import Callback from '@alirya/function/assert/callback-parameters';
import NotCompatibleError from './throwable/compatible-parameters';

export default function Compatible(
    value : unknown,
    error : (value:unknown)=>Error = NotCompatibleError
) : asserts value is globalThis.Date|string|number {

    Callback(value, Guard, error);
}
