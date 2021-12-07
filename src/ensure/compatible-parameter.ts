import CompatibleError from "../assert/throwable/compatible-parameters";
import Value from "@dikac/t-value/value";
import CompatibleParameters from "./compatible-parameters";

export default function CompatibleParameter(
    {
        value,
        error = CompatibleError
    } : Value<unknown> & {
        error : (value:unknown)=>Error
    }
) : globalThis.Date|string|number  {

    return CompatibleParameters(value, error);
}
