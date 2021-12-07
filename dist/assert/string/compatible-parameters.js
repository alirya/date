/**
 * string intended for not Date message
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function CompatibleParameters(value, valid, subject = 'type') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('must compatible with');
    }
    else {
        strings.push('is compatible with');
    }
    strings.push('Date');
    return strings.join(' ') + '.';
}
//# sourceMappingURL=compatible-parameters.js.map