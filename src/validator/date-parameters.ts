import Validator from "@dikac/t-validator/simple";
import DateValidatable from "../validatable/date-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
import DateMessage from "../assert/string/compatible-parameters";
import MessageValidatable from "@dikac/t-validator/message/function/validatable-parameters";

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

    } as Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>>
}
