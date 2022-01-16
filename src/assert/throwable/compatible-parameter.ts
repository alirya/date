import Value from "@alirya/value/value";
import CompatibleParameters from "./compatible-parameters";

export default function CompatibleParameter(
    {
        value,
        subject,
    } : Value & {subject : string}
) : Error {

    return CompatibleParameters(value, subject);
}
