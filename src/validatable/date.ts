import {CallbackParameters} from '@alirya/validator/validatable/callback';
import DateGuard from '../boolean/date';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import DateMessage from '../assert/string/date';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';

export function DateParameters<Argument>(
    value : Argument,
) : Return<Argument, Date, Readonly<Instance<Argument, string>>>;

export function DateParameters<MessageT, Argument>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT>
) : Return<Argument, Date, Readonly<Instance<Argument, MessageT>>>;
export function DateParameters<MessageT, Argument>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT|string> = DateMessage.Parameters
) : Return<Argument, Date, Readonly<Instance<Argument, MessageT>>> {

    return <Return<Argument, Date, Readonly<Instance<Argument, MessageT>>>> CallbackParameters(value, DateGuard, message);
}


export function DateParameter<Argument>(
    {
        value,
    } :  Value<Argument>
) : Return<Argument, Date, Readonly<Instance<Argument, string>>>;

export function DateParameter<MessageT, Argument>(
    {
        value,
        message,
    } : Value<Argument> & Message<ValidatableParameter<Argument, MessageT>>
) : Return<Argument, Date, Readonly<Instance<Argument, MessageT>>>;
export function DateParameter<MessageT, Argument>(
    {
        value,
        message = DateMessage.Parameter,
    } : Value<Argument> & Message<ValidatableParameter<Argument, MessageT|string>>
) : Return<Argument, Date, Readonly<Instance<Argument, MessageT|string>>> {

    return DateParameters(value, (value, valid) => message({value, valid}));
}


namespace Date {
    export const Parameters = DateParameters;
    export const Parameter = DateParameter;
}
export default Date;
