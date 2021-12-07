/**
 * string intended for Date message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function DateParameters(value, valid, subject = 'type', conversion = value => typeof value) {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('must');
    }
    else {
        strings.push('is');
    }
    strings.push('instanceof Date');
    if (!valid) {
        strings[2] = strings[2] + ',';
        strings.push('actual', conversion(value));
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=date-parameters.js.map