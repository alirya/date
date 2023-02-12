import Dateype from '../string/date.js';

export function DateParameters(value : unknown, subject  = '') : Error {

    return new Error(Dateype.Parameters(value, false, subject));
}

export function DateParameter({
    value,
    subject = ''
} : {
    value: unknown,
    subject?: string
}) : Error {

    return new Error(Dateype.Parameters(value, false, subject));
}


namespace Date {
    export const Parameters = DateParameters;
    export const Parameter = DateParameter;
}
export default Date;
