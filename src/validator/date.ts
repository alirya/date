import Validator from '@axiona/validator/simple.js';
import DateValidatable from '../validatable/date.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import SimpleValidatable from '@axiona/validator/validatable/simple.js';
import DateMessage from '../assert/string/compatible.js';
import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';

export function DateParameters() : Validator<unknown, globalThis.Date, string>;

export function DateParameters<MessageT>(
    message : ValidatableParameters<unknown, MessageT>
) : Validator<unknown, globalThis.Date, MessageT>;

export function DateParameters<MessageT>(
    message : ValidatableParameters<unknown, MessageT|string> = DateMessage.Parameters
) : Validator<unknown, globalThis.Date, MessageT> {

    return function(value) {

        return <SimpleValidatable<unknown, globalThis.Date, MessageT>> DateValidatable.Parameters(value, message);

    } as Validator<unknown, globalThis.Date, MessageT>;
}


export function DateParameter(
) : Validator<unknown, globalThis.Date, string>;

export function DateParameter<MessageT>(
    message : ValidatableParameter<unknown, MessageT>
) : Validator<unknown, globalThis.Date, MessageT>;

export function DateParameter<MessageT>(
    message : ValidatableParameter<unknown, MessageT|string> = DateMessage.Parameter
) : Validator<unknown, globalThis.Date, MessageT|string> {

    return DateParameters((value, valid) => message({valid, value}));
}


namespace Date {
    export const Parameters = DateParameters;
    export const Parameter = DateParameter;
}
export default Date;
