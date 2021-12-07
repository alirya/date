import Guard from "../boolean/date";
import Callback from "@dikac/t-function/assert/callback-parameters";
import DateError from "./throwable/date";
export default function Date(value, error = DateError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=date.js.map