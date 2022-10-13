import Guard from '../boolean/compatible';
import {CallbackParameters} from '@alirya/function/assert/callback';
import CompatibleError from './throwable/compatible';
import CompatibleType from '../compatible';

export default function Compatible(
    value : unknown,
    error : (value:unknown)=>Error = CompatibleError.Parameters
) : asserts value is CompatibleType {

    CallbackParameters(value, Guard, error);
}
