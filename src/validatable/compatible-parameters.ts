import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import CompatibleGuard from "../boolean/compatible";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import MessageValidatable from "@dikac/t-validator/message/function/validatable-parameters";
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
