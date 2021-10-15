import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validator from "@dikac/t-validator/simple";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
import CompatibleValidatable from "../validatable/compatible";

export default function Compatible<MessageT>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageT
) : Validator<unknown, Date|string|number, Readonly<Instance<unknown, MessageT>>> {

    return function<Type extends number, Argument extends unknown>(value: Type|Argument) {

        return  CompatibleValidatable(value, message);

    } as Validator<unknown, Date|string|number, Readonly<Instance<unknown, MessageT>>>
}

