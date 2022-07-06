import Validator from '@alirya/validator/simple.js';
import DateValidatable from '../validatable/date.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import SimpleValidatable from '@alirya/validator/validatable/simple.js';
import DateMessage from '../assert/string/compatible.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';

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
