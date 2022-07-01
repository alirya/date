import {CallbackParameters} from '@alirya/validator/validatable/callback';
import CompatibleGuard from '../boolean/compatible';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import DateMessage from '../assert/string/compatible';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';

export function CompatibleParameters<Argument>(
    value : Argument,
) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, string>>>;

export function CompatibleParameters<MessageT, Argument>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT>
) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT>>>;

export function CompatibleParameters<MessageT, Argument>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT|string> = DateMessage.Parameters
) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT>>> {

    return <Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT>>>> CallbackParameters(value, CompatibleGuard, message);
}


export function CompatibleParameter<Argument>(
    {
        value,
    } : Value<Argument>
) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, string>>>;

export function CompatibleParameter<MessageT, Argument>(
    {
        value,
        message,
    } : Value<Argument> & Message<ValidatableParameter<Argument, MessageT>>
) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT>>>;

export function CompatibleParameter<MessageT, Argument>(
    {
        value,
        message = DateMessage.Parameter,
    } : Value<Argument> & Message<ValidatableParameter<Argument, MessageT|string>>

) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT|string>>> {

    return CompatibleParameters(value, (value, valid) => message({value, valid}));
}


namespace Compatible {
    export const Parameters = CompatibleParameters;
    export const Parameter = CompatibleParameter;
}
export default Compatible;
