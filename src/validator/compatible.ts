import Instance from '@alirya/validator/validatable/validatable.js';
import Validator from '@alirya/validator/simple.js';
import CompatibleValidatable from '../validatable/compatible.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import DateMessage from '../assert/string/date.js';

export function CompatibleParameters() : Validator<unknown, Date|string|number, Readonly<Instance<unknown, string>>>;

export function CompatibleParameters<MessageT>(
    message : ValidatableParameters<unknown, MessageT>
) : Validator<unknown, Date|string|number, Readonly<Instance<unknown, MessageT>>>;

export function CompatibleParameters<MessageT>(
    message : ValidatableParameters<unknown, MessageT|string> = DateMessage.Parameters
) : Validator<unknown, Date|string|number, Readonly<Instance<unknown, MessageT>>> {

    return function<Type extends number, Argument extends unknown>(value: Type|Argument) {

        return CompatibleValidatable.Parameters(value, message);

    } as Validator<unknown, Date|string|number, Readonly<Instance<unknown, MessageT>>>;
}



export function CompatibleParameter() : Validator<unknown, Date|string|number, Readonly<Instance<unknown, string>>>;

export function CompatibleParameter<MessageT>(
    message : ValidatableParameter<unknown, MessageT>
) : Validator<unknown, Date|string|number, Readonly<Instance<unknown, MessageT>>>;

export function CompatibleParameter<MessageT>(
    message : ValidatableParameter<unknown, MessageT|string> = DateMessage.Parameter
) : Validator<unknown, Date|string|number, Readonly<Instance<unknown, MessageT>>> {

    return function(value) {

        return CompatibleValidatable.Parameter({value, message});

    } as Validator<unknown, Date|string|number, Readonly<Instance<unknown, MessageT>>>;
}



namespace Compatible {
    export const Parameters = CompatibleParameters;
    export const Parameter = CompatibleParameter;
}
export default Compatible;
