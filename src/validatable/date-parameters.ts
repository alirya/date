import Callback from '@alirya/validator/validatable/callback-function-parameters';
import DateGuard from '../boolean/date';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import MessageValidatable from '@alirya/validator/message/function/validatable-parameters';
import DateMessage from '../assert/string/date-parameters';

export default function DateParameters<Argument>(
    value : Argument,
) : Return<Argument, Date, Readonly<Instance<Argument, string>>>;

export default function DateParameters<MessageT, Argument>(
    value : Argument,
    message : MessageValidatable<Argument, MessageT>
) : Return<Argument, Date, Readonly<Instance<Argument, MessageT>>>;
export default function DateParameters<MessageT, Argument>(
    value : Argument,
    message : MessageValidatable<Argument, MessageT|string> = DateMessage
) : Return<Argument, Date, Readonly<Instance<Argument, MessageT>>> {

    return <Return<Argument, Date, Readonly<Instance<Argument, MessageT>>>> Callback(value, DateGuard, message);
}
