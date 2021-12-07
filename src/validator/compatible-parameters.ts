import Instance from "@dikac/t-validator/validatable/validatable";
import Validator from "@dikac/t-validator/simple";
import CompatibleValidatable from "../validatable/compatible-parameters";
import MessageValidatable from "@dikac/t-validator/message/function/validatable-parameters";
import DateMessage from "../assert/string/date-parameters";

export default function CompatibleParameters() : Validator<unknown, Date|string|number, Readonly<Instance<unknown, string>>>

export default function CompatibleParameters<MessageT>(
    message : MessageValidatable<unknown, MessageT>
) : Validator<unknown, Date|string|number, Readonly<Instance<unknown, MessageT>>>

export default function CompatibleParameters<MessageT>(
    message : MessageValidatable<unknown, MessageT|string> = DateMessage
) : Validator<unknown, Date|string|number, Readonly<Instance<unknown, MessageT>>> {

    return function<Type extends number, Argument extends unknown>(value: Type|Argument) {

        return  CompatibleValidatable(value, message);

    } as Validator<unknown, Date|string|number, Readonly<Instance<unknown, MessageT>>>
}

