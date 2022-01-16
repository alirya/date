import Callback from "@alirya/validator/validatable/callback-function-parameters";
import CompatibleGuard from "../boolean/compatible";
import Return from "@alirya/validator/validatable/simple";
import Instance from "@alirya/validator/validatable/validatable";
import MessageValidatable from "@alirya/validator/message/function/validatable-parameters";
import DateMessage from "../assert/string/compatible-parameters";

export default function CompatibleParameters<Argument>(
    value : Argument,
) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, string>>>;

export default function CompatibleParameters<MessageT, Argument>(
    value : Argument,
    message : MessageValidatable<Argument, MessageT>
) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT>>>;

export default function CompatibleParameters<MessageT, Argument>(
    value : Argument,
    message : MessageValidatable<Argument, MessageT|string> = DateMessage
) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT>>> {

    return <Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT>>>> Callback(value, CompatibleGuard, message);
}
