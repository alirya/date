import CompatibleValidatable from "../validatable/compatible-parameters";
import DateMessage from "../assert/string/date-parameters";
export default function CompatibleParameters(message = DateMessage) {
    return function (value) {
        return CompatibleValidatable(value, message);
    };
}
//# sourceMappingURL=compatible-parameter.js.map