import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Compatible from './date';
/**
 * string intended for Date message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export function DateParameters(
    value : unknown,
    valid : boolean,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('instanceof Date');

    if(!valid) {

        strings[2] = strings[2] + ',';

        strings.push('actual', conversion(value));
    }

    return strings.join(' ') + '.';
}

export function DateParameter({
    valid,
    value,
} : Readonly<Validatable & Value>) : string {

    return Compatible.Parameters(value, valid);
}


namespace Date {
    export const Parameters = DateParameters;
    export const Parameter = DateParameter;
}
export default Date;
