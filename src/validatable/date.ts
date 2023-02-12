import {CallbackParameters} from '@alirya/validator/validatable/callback.js';
import DateGuard from '../boolean/date.js';
import Return from '@alirya/validator/validatable/simple.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import DateMessage from '../assert/string/date.js';
import Value from '@alirya/value/value.js';
import Message from '@alirya/message/message.js';

export function DateParameters<Argument>(
    value : Argument,
) : Return<Argument, Date, string>;

export function DateParameters<MessageT, Argument>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT>
) : Return<Argument, Date, MessageT>;
export function DateParameters<MessageT, Argument>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT|string> = DateMessage.Parameters
) : Return<Argument, Date, MessageT|string> {

    return <Return<Argument, Date, MessageT|string>> CallbackParameters(value, DateGuard, message);
}


export function DateParameter<Argument>(
    {
        value,
    } :  Value<Argument>
) : Return<Argument, Date, string>;

export function DateParameter<MessageT, Argument>(
    {
        value,
        message,
    } : Value<Argument> & Message<ValidatableParameter<Argument, MessageT>>
) : Return<Argument, Date, MessageT>;
export function DateParameter<MessageT, Argument>(
    {
        value,
        message = DateMessage.Parameter,
    } : Value<Argument> & Message<ValidatableParameter<Argument, MessageT|string>>
) : Return<Argument, Date, MessageT|string> {

    return DateParameters(value, (value, valid) => message({value, valid}));
}


namespace Date {
    export const Parameters = DateParameters;
    export const Parameter = DateParameter;
}
export default Date;
