import CompatibleType from '../string/compatible-parameters';

export default function CompatibleParameters(value : unknown, subject : string = '') : Error {

    return new Error(CompatibleType(value, false, subject));
}
