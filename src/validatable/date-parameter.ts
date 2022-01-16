import Return from '@alirya/validator/validatable/simple';
import Value from '@alirya/value/value';
import Instance from '@alirya/validator/validatable/validatable';
import MessageValidatable from '@alirya/validator/message/function/validatable-parameter';
import DateMessage from '../assert/string/date-parameter';
import Message from '@alirya/message/message';
import DateParameters from './date-parameters';

export default function DateParameter<Argument>(
    {
        value,
    } :  Value<Argument>
) : Return<Argument, Date, Readonly<Instance<Argument, string>>>;

export default function DateParameter<MessageT, Argument>(
    {
        value,
        message,
    } : Value<Argument> & Message<MessageValidatable<Argument, MessageT>>
) : Return<Argument, Date, Readonly<Instance<Argument, MessageT>>>;
export default function DateParameter<MessageT, Argument>(
    {
        value,
        message = DateMessage,
    } : Value<Argument> & Message<MessageValidatable<Argument, MessageT|string>>
) : Return<Argument, Date, Readonly<Instance<Argument, MessageT|string>>> {

    return DateParameters(value, (value, valid) => message({value, valid}));
}
