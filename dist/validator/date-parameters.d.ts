import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import MessageValidatable from "@dikac/t-validator/message/function/validatable-parameters";
export default function DateParameters(): Validator<unknown, globalThis.Date, Readonly<Instance<unknown, string>>>;
export default function DateParameters<MessageT>(message: MessageValidatable<unknown, MessageT>): Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>>;
