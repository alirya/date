import Return from '@alirya/validator/validatable/simple';
import Value from '@alirya/value/value';
import Instance from '@alirya/validator/validatable/validatable';
import MessageValidatable from '@alirya/validator/message/function/validatable-parameter';
import DateMessage from '../assert/string/compatible-parameter';
import CompatibleParameters from './compatible-parameters';
import Message from '@alirya/message/message';

export default function CompatibleParameter<Argument>(
    {
        value,
    } : Value<Argument>
) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, string>>>;

export default function CompatibleParameter<MessageT, Argument>(
    {
        value,
        message,
    } : Value<Argument> & Message<MessageValidatable<Argument, MessageT>>
) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT>>>;

export default function CompatibleParameter<MessageT, Argument>(
    {
        value,
        message = DateMessage,
    } : Value<Argument> & Message<MessageValidatable<Argument, MessageT|string>>

) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT|string>>> {

    return CompatibleParameters(value, (value, valid) => message({value, valid}));
}
