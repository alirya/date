import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import DateMessage from "./compatible-parameters";

export default function CompatibleParameter({
   valid,
   value,
} : Readonly<Validatable & Value>) : string {

    return DateMessage(value, valid)
}
