import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import DateMessage from './compatible.js';
/**
 * string intended for not Date message
 *
 * @param valid
 * @param value
 * @param subject
 */
export function CompatibleParameters(
    value : unknown,
    valid : boolean,
    subject  = 'type',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is compatible with');

    } else {

        strings.push('must compatible with');
    }

    strings.push('Date');

    return strings.join(' ') + '.';
}


export function CompatibleParameter({
   valid,
   value,
} : Readonly<Validatable & Value>) : string {

    return DateMessage.Parameters(value, valid);
}


namespace Compatible {
    export const Parameters = CompatibleParameters;
    export const Parameter = CompatibleParameter;
}
export default Compatible;
