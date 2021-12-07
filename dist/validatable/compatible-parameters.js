import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import CompatibleGuard from "../boolean/compatible";
import DateMessage from "../assert/string/compatible-parameters";
export default function CompatibleParameters(value, message = DateMessage) {
    return Callback(value, CompatibleGuard, message);
}
//# sourceMappingURL=compatible-parameters.js.map