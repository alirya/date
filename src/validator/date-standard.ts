import Date from "./date";
import DateMessage from "../validatable/string/compatible";
import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function DateStandard() : Validator<unknown, globalThis.Date, Readonly<Instance<unknown, string>>>  {

    return Date(DateMessage)
}
