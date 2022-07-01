import Validator from '@alirya/validator/simple';
import DateValidatable from '../validatable/date';
import Instance from '@alirya/validator/validatable/validatable';
import SimpleValidatable from '@alirya/validator/validatable/simple';
import DateMessage from '../assert/string/compatible';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';

export function DateParameters(
) : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, string>>>;

export function DateParameters<MessageT>(
    message : ValidatableParameters<unknown, MessageT>
) : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>>;

export function DateParameters<MessageT>(
    message : ValidatableParameters<unknown, MessageT|string> = DateMessage.Parameters
) : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>> {

    return function(value) {

        return <SimpleValidatable<unknown, globalThis.Date, Readonly<Instance<number, MessageT>>>> DateValidatable.Parameters(value, message);

    } as Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>>;
}


export function DateParameter(
) : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, string>>>;

export function DateParameter<MessageT>(
    message : ValidatableParameter<unknown, MessageT>
) : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>>;

export function DateParameter<MessageT>(
    message : ValidatableParameter<unknown, MessageT|string> = DateMessage.Parameter
) : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT|string>>> {

    return DateParameters((value, valid) => message({valid, value}));
}


namespace Date {
    export const Parameters = DateParameters;
    export const Parameter = DateParameter;
}
export default Date;
