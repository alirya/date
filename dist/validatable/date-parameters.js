import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import DateGuard from "../boolean/date";
import DateMessage from "../assert/string/date-parameters";
export default function DateParameters(value, 
// message : (result:Readonly<Value<Argument> & Validatable>)=>MessageT,
message = DateMessage) {
    return Callback(value, DateGuard, message);
}
//# sourceMappingURL=date-parameters.js.map