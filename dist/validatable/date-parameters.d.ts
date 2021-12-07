import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import MessageValidatable from "@dikac/t-validator/message/function/validatable-parameters";
export default function DateParameters<Argument>(value: Argument): Return<Argument, Date, Readonly<Instance<Argument, string>>>;
export default function DateParameters<MessageT, Argument>(value: Argument, message: MessageValidatable<Argument, MessageT>): Return<Argument, Date, Readonly<Instance<Argument, MessageT>>>;
