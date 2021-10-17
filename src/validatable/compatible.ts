import Callback from "@dikac/t-validator/validatable/callback";
import CompatibleGuard from "../boolean/compatible";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function Compatible<MessageT, Argument>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageT
) : Return<any, Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT>>> {

    return <Return<any, Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT>>>> Callback(value, CompatibleGuard, message);
}
