import Instance from "@dikac/t-validator/validatable/validatable";
import Validator from "@dikac/t-validator/simple";
import MessageValidatable from "@dikac/t-validator/message/function/validatable-parameters";
export default function CompatibleParameters(): Validator<unknown, Date | string | number, Readonly<Instance<unknown, string>>>;
export default function CompatibleParameters<MessageT>(message: MessageValidatable<unknown, MessageT>): Validator<unknown, Date | string | number, Readonly<Instance<unknown, MessageT>>>;
