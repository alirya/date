import Guard from '../boolean/compatible.js';
import {CallbackParameters} from '@axiona/function/assert/callback.js';
import CompatibleError from './throwable/compatible.js';
import CompatibleType from '../compatible.js';

export default function Compatible(
    value : unknown,
    error : (value:unknown)=>Error = CompatibleError.Parameters
) : asserts value is CompatibleType {

    CallbackParameters(value, Guard, error);
}
