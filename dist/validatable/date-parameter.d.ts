import Return from "@dikac/t-validator/validatable/simple";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import MessageValidatable from "@dikac/t-validator/message/function/validatable-parameter";
import Message from "@dikac/t-message/message";
export default function DateParameter<Argument>({ value, }: Value<Argument>): Return<Argument, Date, Readonly<Instance<Argument, string>>>;
export default function DateParameter<MessageT, Argument>({ value, message, }: Value<Argument> & Message<MessageValidatable<Argument, MessageT>>): Return<Argument, Date, Readonly<Instance<Argument, MessageT>>>;
