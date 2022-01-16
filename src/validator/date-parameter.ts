import Validator from "@alirya/validator/simple";
import Instance from "@alirya/validator/validatable/validatable";
import DateMessage from "../assert/string/compatible-parameter";
import MessageValidatable from "@alirya/validator/message/function/validatable-parameter";
import DateParameters from "./date-parameters";

export default function DateParameter(
) : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, string>>>;

export default function DateParameter<MessageT>(
    message : MessageValidatable<unknown, MessageT>
) : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>>;

export default function DateParameter<MessageT>(
    message : MessageValidatable<unknown, MessageT|string> = DateMessage
) : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT|string>>> {

    return DateParameters((value, valid) => message({valid, value}));
}
