import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import MessageValidatable from "@dikac/t-validator/message/function/validatable-parameters";
export default function CompatibleParameters<Argument>(value: Argument): Return<Argument, globalThis.Date | string | number, Readonly<Instance<Argument, string>>>;
export default function CompatibleParameters<MessageT, Argument>(value: Argument, message: MessageValidatable<Argument, MessageT>): Return<Argument, globalThis.Date | string | number, Readonly<Instance<Argument, MessageT>>>;
