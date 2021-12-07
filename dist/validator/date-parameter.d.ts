import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import MessageValidatable from "@dikac/t-validator/message/function/validatable-parameter";
export default function DateParameter(): Validator<unknown, globalThis.Date, Readonly<Instance<unknown, string>>>;
export default function DateParameter<MessageT>(message: MessageValidatable<unknown, MessageT>): Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>>;
