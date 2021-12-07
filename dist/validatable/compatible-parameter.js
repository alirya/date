import DateMessage from "../assert/string/compatible-parameter";
import CompatibleParameters from "./compatible-parameters";
export default function CompatibleParameter(
// value : Argument,
// message : MessageValidatable<Argument, MessageT> = DateMessage,
{ value, message = DateMessage, }) {
    return CompatibleParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=compatible-parameter.js.map