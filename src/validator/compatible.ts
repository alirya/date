import Instance from '@alirya/validator/validatable/validatable.js';
import Validator from '@alirya/validator/simple.js';
import CompatibleValidatable from '../validatable/compatible.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import DateMessage from '../assert/string/date.js';
import CompatibleType from '../compatible.js';

export function CompatibleParameters() : Validator<unknown, CompatibleType, string>;

export function CompatibleParameters<MessageT>(
    message : ValidatableParameters<unknown, MessageT>
) : Validator<unknown, CompatibleType, MessageT>;

export function CompatibleParameters<MessageT>(
    message : ValidatableParameters<unknown, MessageT|string> = DateMessage.Parameters
) : Validator<unknown, CompatibleType, MessageT|string> {

    return function(value) {

        return CompatibleValidatable.Parameters(value, message);

    } as Validator<unknown, CompatibleType, MessageT|string>;
}



export function CompatibleParameter() : Validator<unknown, CompatibleType, string>;

export function CompatibleParameter<MessageT>(
    message : ValidatableParameter<unknown, MessageT>
) : Validator<unknown, CompatibleType, MessageT>;

export function CompatibleParameter<MessageT>(
    message : ValidatableParameter<unknown, MessageT|string> = DateMessage.Parameter
) : Validator<unknown, CompatibleType, MessageT|string> {

    return function(value) {

        return CompatibleValidatable.Parameter({value, message});

    } as Validator<unknown, CompatibleType, MessageT|string>;
}



namespace Compatible {
    export const Parameters = CompatibleParameters;
    export const Parameter = CompatibleParameter;
}
export default Compatible;
