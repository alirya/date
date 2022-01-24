/**
 * string intended for Date message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function DateParameters(
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

