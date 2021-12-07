import Return from "@dikac/t-validator/validatable/simple";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import MessageValidatable from "@dikac/t-validator/message/function/validatable-parameter";
import DateMessage from "../assert/string/date-parameter";
import Message from "@dikac/t-message/message";
import DateParameters from "./date-parameters";

export default function DateParameter<Argument>(
   // value : Argument,
    // message : (result:Readonly<Value<Argument> & Validatable>)=>MessageT,
    // message : MessageValidatable<Argument, MessageT>
    {
        value,
        //message,
    } :  Value<Argument>
) : Return<Argument, Date, Readonly<Instance<Argument, string>>>;

export default function DateParameter<MessageT, Argument>(
    // value : Argument,
    // message : (result:Readonly<Value<Argument> & Validatable>)=>MessageT,
    // message : MessageValidatable<Argument, MessageT>,
    {
        value,
        message,
    } : Value<Argument> & Message<MessageValidatable<Argument, MessageT>>
) : Return<Argument, Date, Readonly<Instance<Argument, MessageT>>>;
export default function DateParameter<MessageT, Argument>(
    // value : Argument,
    // message : (result:Readonly<Value<Argument> & Validatable>)=>MessageT,
    // message : MessageValidatable<Argument, MessageT> = DateMessage,
    {
        value,
        message = DateMessage,
    } : Value<Argument> & Message<MessageValidatable<Argument, MessageT|string>>
) : Return<Argument, Date, Readonly<Instance<Argument, MessageT|string>>> {

    return DateParameters(value, (value, valid) => message({value, valid}));
}
