import Validator from '@alirya/validator/simple';
import DateValidatable from '../validatable/date-parameters';
import Instance from '@alirya/validator/validatable/validatable';
import SimpleValidatable from '@alirya/validator/validatable/simple';
import DateMessage from '../assert/string/compatible-parameters';
import MessageValidatable from '@alirya/validator/message/function/validatable-parameters';

export default function DateParameters(
) : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, string>>>;

export default function DateParameters<MessageT>(
    message : MessageValidatable<unknown, MessageT>
) : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>>;

export default function DateParameters<MessageT>(
    message : MessageValidatable<unknown, MessageT|string> = DateMessage
) : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>> {

    return function(value) {

        return <SimpleValidatable<unknown, globalThis.Date, Readonly<Instance<number, MessageT>>>> DateValidatable(value, message);

    } as Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>>;
}
