import Dateype from "../string/date-parameters";

export default function Date(value : unknown, subject : string = '') : Error {

    return new Error(Dateype(value, false, subject))
}
