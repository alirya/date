import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function Date<MessageT>(message: (result: Readonly<Value> & Readonly<Validatable>) => MessageT): Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>>;
