import {CallbackParameters} from '@axiona/validator/validatable/callback.js';
import CompatibleGuard from '../boolean/compatible.js';
import Return from '@axiona/validator/validatable/simple.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import DateMessage from '../assert/string/compatible.js';
import Value from '@axiona/value/value.js';
import Message from '@axiona/message/message.js';
import CompatibleType from '../compatible.js';

export function CompatibleParameters<Argument>(
    value : Argument,
) : Return<Argument, CompatibleType, string>;

export function CompatibleParameters<MessageT, Argument>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT>
) : Return<Argument, CompatibleType, MessageT>;

export function CompatibleParameters<MessageT, Argument>(
    value : Argument,
    message : ValidatableParameters<Argument, MessageT|string> = DateMessage.Parameters
) : Return<Argument, CompatibleType, MessageT|string> {

    return <Return<Argument, CompatibleType, MessageT|string>> CallbackParameters(value, CompatibleGuard, message);
}


export function CompatibleParameter<Argument>(
    {
        value,
    } : Value<Argument>
) : Return<Argument, CompatibleType, Readonly<Instance<Argument, string>>>;

export function CompatibleParameter<MessageT, Argument>(
    {
        value,
        message,
    } : Value<Argument> & Message<ValidatableParameter<Argument, MessageT>>
) : Return<Argument, CompatibleType, MessageT>;

export function CompatibleParameter<MessageT, Argument>(
    {
        value,
        message = DateMessage.Parameter,
    } : Value<Argument> & Message<ValidatableParameter<Argument, MessageT|string>>

) : Return<Argument, CompatibleType, MessageT|string> {

    return CompatibleParameters(value, (value, valid) => message({value, valid}));
}


namespace Compatible {
    export const Parameters = CompatibleParameters;
    export const Parameter = CompatibleParameter;
}
export default Compatible;
