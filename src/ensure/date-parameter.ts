import CompatibleError from "../assert/throwable/compatible-parameters";
import Value from "@dikac/t-value/value";
import DateParameters from "./date-parameters";

export default function DateParameter(
    {
        value,
        error = CompatibleError
    } : Value<unknown> & {
        error : (value:unknown)=>Error
    }
) : globalThis.Date {

    return DateParameters(value, error);
}
