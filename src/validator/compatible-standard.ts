import Compatible from "./compatible";
import DateMessage from "../validatable/string/date";
import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function CompatibleStandard() : Validator<unknown, Date|string|number, Readonly<Instance<unknown, string>>>{

    return Compatible(DateMessage)
}
