import DateValidatable from "../validatable/date-parameters";
import DateMessage from "../assert/string/compatible-parameters";
export default function DateParameters(
// message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageT|string = DateMessage
message = DateMessage) {
    return function (value) {
        return DateValidatable(value, message);
    };
}
//# sourceMappingURL=date-parameters.js.map