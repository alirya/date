import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import DateValidatable from "../validatable/date";
import Instance from "@dikac/t-validator/validatable/validatable";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";


export default function Date<MessageT>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageT
) : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>> {

    return function<Type extends number, Argument extends unknown>(value : Type|Argument) {

        return <SimpleValidatable<unknown, Argument, globalThis.Date, Readonly<Instance<number, MessageT>>>> DateValidatable(value, message);

    } as Validator<unknown, globalThis.Date, Readonly<Instance<unknown, MessageT>>>
}
