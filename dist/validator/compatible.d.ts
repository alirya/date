import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validator from "@dikac/t-validator/simple";
export default function Compatible<MessageT>(message: (result: Readonly<Value> & Readonly<Validatable>) => MessageT): Validator<unknown, Date | string | number, Readonly<Instance<unknown, MessageT>>>;
