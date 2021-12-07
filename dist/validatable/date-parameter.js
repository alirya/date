import DateMessage from "../assert/string/date-parameter";
import DateParameters from "./date-parameters";
export default function DateParameter(
// value : Argument,
// message : (result:Readonly<Value<Argument> & Validatable>)=>MessageT,
// message : MessageValidatable<Argument, MessageT> = DateMessage,
{ value, message = DateMessage, }) {
    return DateParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=date-parameter.js.map