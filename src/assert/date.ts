import Guard from "../boolean/date";
import Callback from "@dikac/t-function/assert/callback-parameters";
import DateError from "./throwable/date";

export default function Date(
    value : unknown,
    error : (value:unknown)=>Error = DateError
) : asserts value is globalThis.Date {

    Callback(value, Guard, error);
}
