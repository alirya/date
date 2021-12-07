import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Compatible from "./date-parameters";

export default function DateParameter({
    valid,
    value,
} : Readonly<Validatable & Value>) : string {

    return Compatible(value, valid)
}
