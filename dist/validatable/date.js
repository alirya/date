import Callback from "@dikac/t-validator/validatable/callback";
import DateGuard from "../boolean/date";
export default function Date(value, message) {
    return Callback(value, DateGuard, message);
}
//# sourceMappingURL=date.js.map