import Return from "@dikac/t-validator/validatable/simple";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import MessageValidatable from "@dikac/t-validator/message/function/validatable-parameter";
import Message from "@dikac/t-message/message";
export declare type DateParameterArgument<MessageT, Argument> = Value<Argument> & Partial<Message<MessageT>>;
export default function CompatibleParameter<Argument>({ value, }: Value<Argument>): Return<Argument, globalThis.Date | string | number, Readonly<Instance<Argument, string>>>;
export default function CompatibleParameter<MessageT, Argument>({ value, message, }: Value<Argument> & Message<MessageValidatable<Argument, MessageT>>): Return<Argument, globalThis.Date | string | number, Readonly<Instance<Argument, MessageT>>>;
