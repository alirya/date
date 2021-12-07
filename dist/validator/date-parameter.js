import DateMessage from "../assert/string/compatible-parameter";
import DateParameters from "./date-parameters";
export default function DateParameter(
// message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageT|string = DateMessage
message = DateMessage) {
    return DateParameters((value, valid) => message({ valid, value }));
}
//# sourceMappingURL=date-parameter.js.map