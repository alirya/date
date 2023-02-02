import Instance from '@alirya/validator/validatable/validatable';
import Validator from '@alirya/validator/simple';
import CompatibleValidatable from '../validatable/compatible';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import DateMessage from '../assert/string/date';
import CompatibleType from '../compatible';

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
